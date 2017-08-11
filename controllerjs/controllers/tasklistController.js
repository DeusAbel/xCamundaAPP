var app = angular.module('xCamundaAPP');
app.controller('tasklistController', function ($scope, tasklistService) {

    console.log("tasklistController");

    $scope.tareasXInstancia = [];
    
    $scope.pinstanVariables = [];

    $scope.tipoVariable = [
        {
            "valor": "int",
            "texto": "Numero"
        },
        {
            "valor": "String",
            "texto": "Texto"
        },
        {
            "valor": "date",
            "texto": "Fecha"
        }
    ];

    $scope.CompletarTarea = function (dato) {
        var pos = $scope.tareasXInstancia.indexOf(dato);
        

    };

    $scope.ModificarVariable = function (dato) {
        var pos = $scope.pinstanVariables.indexOf(dato);
        if ($scope.pinstanVariables[pos].modificar) {
            $scope.pinstanVariables[pos].modificar = false;
        } else {
            $scope.pinstanVariables[pos].modificar = true;
        }
    };

    $scope.EliminarVariable = function (dato) {
        var pos = $scope.pinstanVariables.indexOf(dato);
        $scope.pinstanVariables.splice(pos, 1);
    };

    $scope.AgregarVariable = function () {

        $scope.nuevaVariable = {
            "nombre": "",
            "tipo": "",
            "valor": "",
            "modificar": false
        };

        $scope.pinstanVariables.push($scope.nuevaVariable)
    };

    $scope.ListarTareas = function (instanciaId) {
        tasklistService.getTareas(instanciaId).success(function (data) {
            $scope.tareasXInstancia = data;
            //console.log($scope.tareasXInstancia);
        });
    };
    
    $scope.CargarVariablesInstancia = function (instanciaId){
        tasklistService.getVariablesXInstancia(instanciaId).success(function(data){
           $scope.pinstanVariables = data;
        });
    };

    $scope.$on('instanciaId', function (evt, msg) {
        console.log(msg);
        $scope.ListarTareas(msg);
        $scope.CargarVariablesInstancia(msg);
    });




});
