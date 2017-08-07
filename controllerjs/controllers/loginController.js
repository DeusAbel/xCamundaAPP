var app = angular.module('xCamundaAPP');

app.controller('loginController',function loginController($scope){
	
	$scope.usuario = {
			"id" : "0",
	        "nombre" : "anonimo",
			"clave" : "anonimo"
	};


	$scope.loginSrv = function(){
        console.log($scope.usuario.nombre + "/"+ $scope.usuario.clave);
        if ($scope.usuario.nombre=="abel" && $scope.usuario.clave=="1234"){
			console.log("Logeado con exito");
		}else{
			console.log("Error en el logeado");
		}
        
    } 

});