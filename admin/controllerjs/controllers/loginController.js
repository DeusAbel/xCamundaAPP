var app = angular.module('xCamundaAPP');

app.controller('loginController',function loginController($scope, loginService){
	$scope.usuario = {			
    	"usuario" : "anonimoUSR",
		"password" : "anonimo",
	};
	$scope.loginSrv = function(){
        //console.log($scope.usuario.nombre + "/"+ $scope.usuario.clave);
        //if ($scope.usuario.nombre=="abel" && $scope.usuario.clave=="1234"){
			
		loginService.loginUser($scope.usuario).success(function(data){
			
			if (data.success){
				console.log("user 1 : " + $scope.$parent.usuario.usuario + "/"+ $scope.$parent.usuario.password);
				$scope.$parent.usuario = $scope.usuario;
				console.log("user 1 : " + $scope.$parent.usuario.usuario + "/"+ $scope.$parent.usuario.password);
				setTimeout(function()
				{
					$scope.$parent.$parent.$parent.$broadcast('actualizar_procesos', $scope.usuario); 
					console.log("user 2 : " + $scope.$parent.usuario.usuario + "/"+ $scope.$parent.usuario.password);
				}, 200); 				
			}			
		});
		 
		setTimeout(function()
		{
			
			console.log("user delay : " + $scope.$parent.usuario.usuario + "/"+ $scope.$parent.usuario.password);
		}, 200);

		/*if ($scope.usuario!=null){
			
			console.log("Logeado con exito");
			$scope.$parent.usuario = $scope.usuario;
			
		}else{
			console.log("Error en el logeado");
		} */      
	} 	
});