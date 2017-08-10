var app = angular.module('xCamundaAPP',[]);

app.controller('mainController', function ($scope, mainService, loginService){
	var path = "http://localhost:8080/sig/camunda/procesos";
	$scope.procesos = [];

	$scope.instancia_Procesos_actual = "";
	$scope.proceso_actual = "";

	$scope.usuario = 
		{
            "id" : "123456789",
            "nombre" : "Anonimo"
		};

    /*
	$scope.procesos = [
		{
            "id" : "123456789",
            "nombre" : "Proceso 1"
        },{
           "id" : "123456789",
            "nombre" : "Proceso 2"
        },{
            "id" : "123456789",
            "nombre" : "Proceso 3"
        },{
            "id" : "123456789",
            "nombre" : "Proceso 4"
        },{
            "id" : "123456789",
            "nombre" : "Proceso 5"
        },{
            "id" : "123456789",
            "nombre" : "Proceso 6"
        },{
            "id" : "123456789",
            "nombre" : "Proceso 7"
        }
    ];*/


	
	$scope.getUser = function(){		
		$scope.usuario.nombre = loginService.usuario.nombreCompleto;					
	}

	$scope.getProcesos = function(){
		/*$http.get(path)
            .then(function (data) {
                $scope.procesos = data.data;          
                console.log($scope.procesos);
            }, function(data) {          
                console.log("error: " + data);
		});*/
		mainService.getProcesos().success(function(data){
            $scope.procesos = data;            
        });		
	}

	$scope.listarInstancias = function(pos){

		/*$http.get(path)
            .then(function (data) {
                $scope.procesos = data.data;          
                console.log($scope.procesos);
            }, function(data) {          
                console.log("error: " + data);
		});*/
		
		$scope.proceso_actual = $scope.procesos[pos];
		console.log(pos);
		console.log($scope.proceso_actual);


		$scope.$parent.$broadcast('msg', $scope.proceso_actual);
		
		console.log($scope.proceso_actual);
	}
	
	$scope.getProcesos();
	/*mainService.setProcesos("qqqqqq");
	$scope.procesos = mainService.getProcesos();
	$scope.procesos = mainService.getProcesos();	
	//$scope.procesos = mainService.getProcesos();*/
	//console.log("DATOS"+$scope.procesos);

});