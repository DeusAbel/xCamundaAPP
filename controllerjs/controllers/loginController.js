var app = angular.module('xCamundaAPP');

app.controller('loginController',function loginController($scope, loginService){
	
	$scope.usuario = {
			"id" : "0",
	        "nombre" : "anonimo",
			"clave" : "anonimo",
			"nombreCompleto" : "usuario aonimo"
	};


	$scope.loginSrv = function(){
        //console.log($scope.usuario.nombre + "/"+ $scope.usuario.clave);
        //if ($scope.usuario.nombre=="abel" && $scope.usuario.clave=="1234"){
		if (loginService.loginUser($scope.usuario)!=null){
			console.log("Logeado con exito"+ loginService.usuario.nombreCompleto);

		}else{
			console.log("Error en el logeado");
		}
        
    } 

});