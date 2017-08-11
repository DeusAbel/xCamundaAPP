var app = angular.module('xCamundaAPP',[]);

app.controller('mainController', function ($scope, mainService, loginService){
	$scope.procesos = [];

	$scope.instancia_Proceso_actual = "";
	$scope.proceso_actual = "";

	$scope.usuario = {			
    	"usuario" : "anonimo",
		"password" : "anonimo",
	};
/*
	$scope.getUser = function(){		
		$scope.usuario.usuario = loginService.usuario.usuario;					
	}
*/
	$scope.getProcesos = function(){
		console.log("user 3 : " + $scope.usuario.usuario + "/"+ $scope.usuario.password);
		mainService.getProcesosUsuario($scope.usuario.usuario).success(function(data){
        	$scope.procesos = data;            
        });		
	}

	$scope.listarInstancias = function(pos){	
		$scope.proceso_actual = $scope.procesos[pos];
		$scope.$parent.$broadcast('actualizar_instancias', $scope.proceso_actual);	
        
        //$scope.$parent.$broadcast('instanciaId', "0198e61d-7df0-11e7-9419-002100a5c998");
		
	}
	
	//$scope.getProcesos();
	$scope.$on('actualizar_procesos', function (evt, msg) {
		setTimeout(function()
		{			
			$scope.usuario = msg;
			$scope.getProcesos();
		}, 2000); 		
	});



});