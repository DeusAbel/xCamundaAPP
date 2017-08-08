var app = angular.module('xCamundaAPP');
app.controller('pinstanslistdetailsController', function ($scope){

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
});