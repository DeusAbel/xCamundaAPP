var app = angular.module('xCamundaAPP');
app.controller('pinstanslistController', function ($scope, pinstanslistService) {
    //$scope.pinstan = {};  
    $scope.pinstanslist = "";
    //$scope.proceso_actual = "";
    $scope.pinstanciaId = "";

    /*[{
        "date": 1502301398481,
        "instanceid": "720a9b68-77ab-11e7-b2d9-4ee01023a3b9",
        "businesskey": null,
        "processdefinitionid": "invoice:2:b503c3ad-56a3-11e7-9747-4ee01023a3b9"
    }]*/



    $scope.getInstansProceso = function () {

        pinstanslistService.getInstansProceso($scope.$parent.proceso_actual).success(function (data) {
            $scope.pinstanslist = data;
        });
    }

    $scope.CargarTareas = function (dato) {
        var pos = $scope.pinstanslist.indexOf(dato);
        //console.log($scope.pinstanslist);
        //console.log($scope.pinstanslist[pos].instanceid);
        $scope.pinstanciaId = $scope.pinstanslist[pos].instanceid;
        $scope.$parent.$parent.$broadcast('instanciaId', $scope.pinstanciaId);
        console.log($scope.pinstanciaId);
    }

    $scope.EliminarTarea = function (dato) {
        var pos = $scope.pinstanslist.indexOf(dato);
        console.log($scope.pinstanslist[pos].instanceid);
        pinstanslistService.deleteInstanciaProceso($scope.pinstanslist[pos].instanceid).success(function (data) {
            alert(data.respuesta);
        });
    }


    var vm = this;


    $scope.$on('actualizar_instancias', function (evt, msg) {

        $scope.getInstansProceso();

    });


});
