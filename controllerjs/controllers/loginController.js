var app = angular.module('xCamundaAPP');

app.controller('loginController',function loginController($scope, loginService){
	
	$scope.usuario = {
			"id" : "0",
	        "nombre" : "anonimo",
			"clave" : "anonimo",
			"nombreCompleto" : "usuario anonimo"
	};


	$scope.loginSrv = function(){
        //console.log($scope.usuario.nombre + "/"+ $scope.usuario.clave);
        //if ($scope.usuario.nombre=="abel" && $scope.usuario.clave=="1234"){
		console.log("Datos enviados: " + $scope.usuario.nombre);
		$scope.usuario=loginService.loginUser($scope.usuario);	
		console.log("Datos del servicio: " + $scope.usuario);	
		if ($scope.usuario!=null){
			
			console.log("Logeado con exito");
			$scope.$parent.usuario = $scope.usuario;
		}else{
			console.log("Error en el logeado");
		}
        
    } 

});