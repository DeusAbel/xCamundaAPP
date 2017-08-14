var app = angular.module('xCamundaAPP');
app.controller('taskeventlistController', function ($scope, taskeventlistService) {

    console.log("taskeventlistController");

    $scope.eventosXInstancia = [];

    $scope.completarEventoDatos = {
        "eventName": "",
        "executionId": "",
    };

    $scope.CompletarEvento = function (dato) {
        var pos  = $scope.eventosXInstancia.indexOf(dato);
        
        $scope.completarEventoDatos.eventName = $scope.eventosXInstancia[pos].eventName;
        $scope.completarEventoDatos.executionId = $scope.eventosXInstancia[pos].executionId;
        
        taskeventlistService.putCompletarEvento($scope.completarEventoDatos).success(function(data){
           if (data.success) {
                alert("Se completo el evento");
            } else {
               alert("No se completo el evento");
            }
        });
    };



    $scope.ListarEventos = function (instanciaId) {
        taskeventlistService.getEventos(instanciaId).success(function (data) {
            if (data.success) {
                $scope.eventosXInstancia = data.data;
            } else {
                $scope.eventosXInstancia = [];
            }
            //console.log($scope.tareasXInstancia);
        });
    };


    $scope.$on('instanciaId', function (evt, msg) {
        console.log(msg);
        $scope.ListarEventos(msg.pinstanciaId)
    });
});
