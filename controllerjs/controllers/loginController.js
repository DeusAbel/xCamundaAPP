var app = angular.module('xCamundaAPP');

app.controller('loginController',function loginController($scope, loginService){
	$scope.usuario = {			
    	"usuario" : "demo",
		"password" : "demo",
	};
	$scope.loginSrv = function(){
        //console.log($scope.usuario.nombre + "/"+ $scope.usuario.clave);
        //if ($scope.usuario.nombre=="abel" && $scope.usuario.clave=="1234"){
		loginService.loginUser($scope.usuario).success(function(data){
			$scope.usuario = data;
			
		});
		
		console.log("servicio login" + $scope.usuario)

		if ($scope.usuario!=null){
			
			console.log("Logeado con exito");
			$scope.$parent.usuario = $scope.usuario;
		}else{
			console.log("Error en el logeado");
		}       
    } 
});