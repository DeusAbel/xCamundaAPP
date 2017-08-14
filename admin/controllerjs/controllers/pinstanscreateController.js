var app = angular.module('xCamundaAPP');
app.controller('pinstanscreateController', function ($scope, pinstanscreateService) {

    console.log("instanscreateController");
    //$scope.pinstanVariables = pinstanscreateService.pinstanVariables;
    $scope.pinstanVariables = [];
    $scope.enviarVariables = [];
    //$scope.tipoVariable = pinstanscreateService.tipoVariable;
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

    $scope.ModificarVariable = function (dato) {
        var pos = $scope.pinstanVariables.indexOf(dato);
        //console.log($scope.pinstanVariables[0].modificar);
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


    $scope.EnviarIniciarProceso = {
        //"idproceso": $scope.$parent.proceso_actual,
        "idproceso": "",
        "businessKey": "",
        "description": "",
        "person": "",
        "variables": $scope.enviarVariables
    };


    $scope.IniciarProceso = function () {
        var nVariable = {
            "nombre": "",
            "tipo": "",
            "valor": ""
        }

        for (var variable in $scope.pinstanVariables) {
            //var nVariable = {};
            nVariable.nombre = $scope.pinstanVariables[variable].nombre;
            nVariable.tipo = $scope.pinstanVariables[variable].tipo;
            nVariable.valor = $scope.pinstanVariables[variable].valor;
            $scope.enviarVariables.push(nVariable)
        }

        alert("proceso inciado");
        $scope.EnviarIniciarProceso.idproceso = $scope.$parent.proceso_actual;
        $scope.EnviarIniciarProceso.person = $scope.$parent.usuario.usuario;
        
        pinstanscreateService.postIniciarProceso($scope.EnviarIniciarProceso);
        

        $scope.pinstanVariables = [];
        $scope.enviarVariables = [];
        $scope.EnviarIniciarProceso = {
            "idproceso": "",
            "businessKey": "",
            "description": "",
            "person": "",
            "variables": $scope.enviarVariables
        };
    };
});
