var app = angular.module('xCamundaAPP',['pinstanslistdetailsService']);
app.controller('pinstanslistdetailsController', ['$scope', 'pinstanslistdetailsRequest', pinstanslistdetailsController]);

function pinstanslistdetailsController($scope,pinstanslistdetailsRequest){

    $scope.pinstanVariables = [
        {
            "nombre" : "monto",
            "tipo" : "int",
            "valor" : "1000"
        }
    ];

    $scope.tipoVariable=[
        {
            "id" : "int",
            "valor" : "Numero"
        },
        {
            "id" : "String",
            "valor" : "Texto"
        },
         {
            "id" : "date",
            "valor" : "Fecha"
        }
    ];
}