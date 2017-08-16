var app = angular.module('xCamundaAPP',[]);

app.controller('mainController', function ($scope, mainService, loginService){
	$scope.procesos = [];
	$scope.admin = false;

	$scope.instancia_Proceso_actual = "";
	$scope.proceso_actual = "";


	$scope.usuario = {			
    	"usuario" : "anonimo",
		"password" : "anonimo",
	};

	$scope.getProcesos = function(){
		console.log("user 3 : " + $scope.usuario.usuario + "/"+ $scope.usuario.password);
		mainService.getProcesosUsuario($scope.usuario.usuario).success(function(data){			
			$scope.procesos = $scope.ValidarDatosSrv(data);           			
        });		
	}

	$scope.listarInstancias = function(pos){	
		$scope.proceso_actual = $scope.procesos[pos];
		$scope.$parent.$broadcast('actualizar_instancias', $scope.proceso_actual);	
	}
	
	
	$scope.$on('actualizar_procesos', function (evt, msg) {
		setTimeout(function()
		{			
			$scope.usuario = msg;
			$scope.getProcesos();
		}, 200); 		
	});

	$scope.ValidarDatosSrv = function(data){
		if(data.success){
			return (data.data)			
		}
		else{
			alert(data.mensaje);
			return [];
		}
	};
});

