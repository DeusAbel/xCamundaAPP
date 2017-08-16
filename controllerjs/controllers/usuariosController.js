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
        " ",
        " "
    ];

    $scope.procesos =[
        "ptest1",
        "ptest2"
    ];

    $scope.AgregarUsuario = function () {

        usuariosService.setUsuario($scope.usuarioC).success(function (data){
            if (data.success) {
                console.log($scope.usuarioC);
                
                $scope.usuarios.push($scope.usuarioC.usuario)
                console.log($scope.usuarioC);
            } else {
                alert("Error registrando usuario");
            }
        });
    };

	$scope.getProcesos = function(){
		usuariosService.getProcesos().success(function(data){			
            if (data.success) {
                $scope.procesos = data.data;  
            } else {
                alert("Error al obtener lista de procesos");
            }
        });		
    }

    $scope.getUsuarios = function(){
		usuariosService.getUsuarios().success(function(data){			
            if (data.success) {
                $scope.usuarios = data.data;  
            } else {
                alert("Error al obtener lista de usuarios");
            }
        });		
    }
    
    $scope.getProcesosUsuario = function(){
		mainService.getProcesosUsuario($scope.usuario.username).success(function(data){			                        
            if (data.success) {
                $scope.procesos = data.data;  
            } else {
                alert("Error al obtener lista de procesos del usuario");
            }
        });		
	}

    $scope.getUsuarios();

});
