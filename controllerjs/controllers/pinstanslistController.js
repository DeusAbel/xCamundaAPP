var app = angular.module('xCamundaAPP');
app.controller('pinstanslistController', function ($scope){
    $scope.proceso_actual="1";
    //$scope.pinstan = {};  
    $scope.pinstanslist = [{
        "date": 1502301398481,
        "instanceid": "720a9b68-77ab-11e7-b2d9-4ee01023a3b9",
        "businesskey": null,
        "processdefinitionid": "invoice:2:b503c3ad-56a3-11e7-9747-4ee01023a3b9"
    }]
});