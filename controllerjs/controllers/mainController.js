var app = angular.module('xCamundaAPP',['mainService']);

app.controller('mainController', function ($scope,mainRequest){

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
    ];

	$scope.usuario = 
		{
            "id" : "123456789",
            "nombre" : "Administrador"
		};

	var id = 2;
	
	$scope.usuario.nombre = "hola";
	$scope.usuario.id = "7722b29d3b056e12ee620471726d6610";
	
	getUser = function (){
		mainRequest.getUser(id).success(function(data){
			$scope.usuario.nombre = data.nombre;
		});
	}
	

	mostrarProcesos = function(){
		mainRequest.getProcesos(id).success(function(data){
			$scope.proceso = data;
		});
	}
});