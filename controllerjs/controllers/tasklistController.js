var app = angular.module('xCamundaAPP');
app.controller('tasklistController', function ($scope, tasklistService) {

    console.log("tasklistController");

    $scope.tareasXInstancia = [];

    $scope.CompletarVariables = [];

    $scope.completarTareaDatos = {
        "bpmtaskid": "",
        "variables": $scope.CompletarVariables
    }

    $scope.pinstanVariables = [];
    $scope.pbusineesKey = "";
    $scope.pinstanciasId = "";

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
    $scope.taskId = "";

    $scope.ModalCompletarTarea = function (dato) {
        var pos = $scope.tareasXInstancia.indexOf(dato);
        $scope.taskId = $scope.tareasXInstancia[pos].id;
        
        $scope.pinstanVariables = [];
        $scope.CargarVariablesInstancia($scope.pinstanciasId);
    };

    $scope.CompletarTarea = function () {
        //console.log($scope.pinstanVariables);
        $scope.CompletarVariables = [];
        for (var variable in $scope.pinstanVariables) {
            var nvariable = {};
            nvariable.nombre = $scope.pinstanVariables[variable].nombre;
            nvariable.tipo = $scope.pinstanVariables[variable].tipo;
            nvariable.valor = $scope.pinstanVariables[variable].valor;
            //console.log(nvariable);
            $scope.CompletarVariables.push(nvariable);
        }
        
        $scope.completarTareaDatos.bpmtaskid = $scope.taskId;
        $scope.completarTareaDatos.variables = $scope.CompletarVariables;
        //console.log($scope.CompletarVariables);
        //console.log($scope.completarTareaDatos);

        tasklistService.putCompletarTarea2($scope.completarTareaDatos).success(function (data) {
            if (data.success) {
                alert("Se completo la tarea");
                $scope.ListarTareas($scope.pinstanciasId);
            } else {
                alert("no se completo la tarea");
            }
        });
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
            //$scope.tareasXInstancia = data.data;
            if (data.success) {
                $scope.tareasXInstancia = data.data;
            } else {
                $scope.tareasXInstancia = [];
            }
            //console.log($scope.tareasXInstancia);
        });
    };

    $scope.CargarVariablesInstancia = function (instanciaId) {
        tasklistService.getVariablesXInstancia(instanciaId).success(function (data) {
            var instanciasVariables = [];
            if (data.success) {
                instanciasVariables = data.data;
            } else {
                instanciasVariables = [];
            }
            for (var variable in instanciasVariables) {
                var variables = [];
                variables.nombre = variable;
                variables.tipo = "String";
                variables.valor = instanciasVariables[variable];
                variables.modificar = false;
                $scope.pinstanVariables.push(variables);
            }
        });
    };

    $scope.$on('instanciaId', function (evt, msg) {
        $scope.pinstanciasId = msg.pinstanciaId;
        $scope.pbusineesKey = msg.pbusineesKey;

        //console.log($scope.pinstanciasId);
        $scope.ListarTareas($scope.pinstanciasId);
    });




});
