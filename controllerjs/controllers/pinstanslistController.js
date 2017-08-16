var app = angular.module('xCamundaAPP');
app.controller('pinstanslistController', function ($scope, pinstanslistService) {
    //$scope.pinstan = {};  
    $scope.pinstanslist = "";
    //$scope.proceso_actual = "";
    $scope.pinstanciaId = "";

    $scope.getInstansProceso = function () {

        pinstanslistService.getInstansProceso($scope.$parent.proceso_actual).success(function (data) {
            $scope.pinstanslist = $scope.ValidarDatosSrv(data);
        });
    }

    $scope.CargarTareas = function (dato) {
        var pos = $scope.pinstanslist.indexOf(dato);
        //console.log($scope.pinstanslist);
        //console.log($scope.pinstanslist[pos].instanceid);
        $scope.pinstanciaId = $scope.pinstanslist[pos].instanceid;
        $scope.$parent.$parent.$broadcast('instanciaId', {
            "pinstanciaId": $scope.pinstanciaId,
            "pbusineesKey": $scope.pinstanslist[pos].businesskey
        });
    }

    $scope.EliminarTarea = function (dato) {
        var pos = $scope.pinstanslist.indexOf(dato);
        console.log($scope.pinstanslist[pos].instanceid);
        pinstanslistService.deleteInstanciaProceso($scope.pinstanslist[pos].instanceid).success(function (data) {
            if (data.success) {
                alert("Se elimino el proceso");
                $scope.getInstansProceso();

                $scope.$parent.$parent.$broadcast('instanciaId', {
                    "pinstanciaId": $scope.pinstanciaId,
                    "pbusineesKey": $scope.pinstanslist[pos].businesskey
                });

            } else {
                alert("no se elimino el proceso");
            }
        });
    }

    $scope.$on('actualizar_instancias', function (evt, msg) {
        $scope.getInstansProceso();
    });

    $scope.$on('actualizarListaInstancias', function (evt, msg) {
        console.log("realizo el evento de creacion de instancia");
        $scope.getInstansProceso();
    });
});
