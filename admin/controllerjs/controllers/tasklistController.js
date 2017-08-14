var app = angular.module('xCamundaAPP');
app.controller('tasklistController', function ($scope, tasklistService) {

    console.log("tasklistController");

    $scope.tareasXInstancia = [];
    
    $scope.pinstanVariables = [
//        {
//            "nombre": "",
//            "tipo":"",
//            "valor":"",
//            "modificar": false
//        }
    ];

    $scope.tipoVariable = [
        {
            "valor": "Integer",
            "texto": "Numero"
        },
        {
            "valor": "String",
            "texto": "Texto"
        },
        {
            "valor": "Date",
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

         var nuevaVariable = {
            "nombre": "",
            "tipo": "",
            "valor": "",
            "modificar": false
        };

        $scope.pinstanVariables.push(nuevaVariable)
    };

    $scope.ListarTareas = function (instanciaId) {
        tasklistService.getTareas(instanciaId).success(function (data) {
            $scope.tareasXInstancia = data;
            //console.log($scope.tareasXInstancia);
        });
    };
    
    $scope.CargarVariablesInstancia = function (instanciaId){
        tasklistService.getVariablesXInstancia(instanciaId).success(function(data){
           var instanciasVariables = [];
           instanciasVariables = data;
            for (var variable in instanciasVariables){
                var variables = [];
                variables.nombre = variable ;
                variables.tipo = "String";
                variables.valor = instanciasVariables[variable];
                variables.modificar = false;
                $scope.pinstanVariables.push(variables);
            }
        });
    };

    $scope.$on('instanciaId', function (evt, msg) {
        console.log(msg);
        $scope.ListarTareas(msg);
        $scope.pinstanVariables = [];
        $scope.CargarVariablesInstancia(msg);
    });




});
