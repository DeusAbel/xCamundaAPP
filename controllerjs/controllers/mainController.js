var app = angular.module('xCamundaAPP',[]);

app.controller('mainController', function ($scope, mainService, loginService){
	$scope.procesos = [];

	$scope.instancia_Proceso_actual = "";
	$scope.proceso_actual = "";

	$scope.usuario = {
			"id" : "0",
	        "nombre" : "demo",
			"clave" : "anonimo",
			"nombreCompleto" : "usuario anonimo"
	};

	$scope.getUser = function(){		
		$scope.usuario.nombre = loginService.usuario.nombreCompleto;					
	}

	$scope.getProcesos = function(){
		mainService.getProcesosUsuario($scope.usuario.nombre).success(function(data){
        	$scope.procesos = data;            
        });		
	}

	$scope.listarInstancias = function(pos){	
		$scope.proceso_actual = $scope.procesos[pos];
		$scope.$parent.$broadcast('actualizar_instancias', $scope.proceso_actual);				
		
	}

	

	
	$scope.getProcesos();

});