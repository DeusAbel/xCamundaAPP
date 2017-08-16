var app = angular.module('xCamundaAPP');
app.controller('usuariosController', function ($scope, usuariosService) {

    console.log("usuariosController");

    $scope.usuario = {
        "username" : "",
        "firstName" : "",
        "lastName" : "",
        "password" : "",
        "email" : ""
    };

    $scope.usuarioC = {
        "username" : "test",
        "firstName" : "user test",
        "lastName" : "user test",
        "password" : "test",
        "email" : "test@test.net"
    };

    $scope.usuarios =[

    ];

    $scope.procesos =[
   
    ];

   

    

    $scope.AgregarUsuario = function () {

        usuariosService.setUsuario($scope.usuarioC).success(function (data){
            if (data.success) {
                console.log($scope.usuarioC);
                $scope.getUsuarios();
                //$scope.usuarios.push($scope.usuarioC.usuario)
                console.log($scope.usuarioC);
            } else {
                alert("Error registrando usuario");
            }
        });
    };

	$scope.getProcesos = function(){
		usuariosService.getProcesos().success(function(data){			
            if (data.success) {                
                for (i=0; i<$scope.usuarios.length; i++){
                    $scope.getProcesosUsuario($scope.usuarios[i],i);  
                }
                //$scope.procesos = data.data;  
            } else {
                alert("Error al obtener lista de procesos");
            }
        });		
    }

    $scope.getUsuarios = function(){
		usuariosService.getUsuarios().success(function(data){			
            if (data.success) {
                $scope.usuarios = data.data; 
                $scope.getProcesos();              
            } else {
                alert("Error al obtener lista de usuarios");
            }
            
        });		
    }

    $scope.agregarProcesoUsuario = function(){
		usuariosService.getUsuarios().success(function(data){			
            if (data.success) {
                $scope.usuarios = data.data; 
                $scope.getProcesos();              
            } else {
                alert("Error al obtener lista de usuarios");
            }
            
        });		
    }
    
    $scope.getProcesosUsuario = function(usuario_id,index){
		usuariosService.getProcesosUsuario(usuario_id).success(function(data){	
            
            if (data.success) {
                setTimeout(function() {
                    console.log($scope.procesos);     
                }, 3000);
                $scope.procesos[index]=data.data;
                
            } else {
                alert("Error al obtener lista de procesos del usuario");
            }
        });		
	}

    $scope.getUsuarios();




});
