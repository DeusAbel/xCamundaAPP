var app = angular.module('xCamundaAPP',[]);

app.controller('mainController', function ($scope, mainService, loginService){
	$scope.procesos = [];

	$scope.instancia_Proceso_actual = "";
	$scope.proceso_actual = "";

	$scope.usuario = {			
    	"usuario" : "demo",
		"password" : "anonimo",
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
        
        //$scope.$parent.$broadcast('instanciaId', "0198e61d-7df0-11e7-9419-002100a5c998");
		
	}
<<<<<<< HEAD
=======

	
    
>>>>>>> ec8fb337404961db5a28c2d88752dd8a81b84226
	
	$scope.getProcesos();
});