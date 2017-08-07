var app = angular.module('xCamundaAPP');
app.controller('pinstanslistController', function ($scope){

    console.log("plist la ptmr");

    $scope.proceso_actual="1";
    //$scope.pinstan = {};  
    $scope.pinstanslist = [
        {
            "id" : "123456789",
            "businessKey" : "Instancia Proceso 1.1",
            "fecha" : "01/07/2017"
        },        {
            "id" : "123456789",
            "businessKey" : "Instancia Proceso 1.2",
            "fecha" : "02/07/2017"
        },        {
            "id" : "123456789",
            "businessKey" : "Instancia Proceso 1.3",
            "fecha" : "03/07/2017"
        },        {
            "id" : "123456789",
            "businessKey" : "Instancia Proceso 1.4",
            "fecha" : "04/07/2017"
        },
    ];


});