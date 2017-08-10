var app = angular.module('xCamundaAPP');
app.controller('pinstanscreateController', function ($scope,pinstanscreateService) {

    console.log("instanscreateController");
    //$scope.pinstanVariables = pinstanscreateService.pinstanVariables;
    $scope.pinstanVariables = [];
    //$scope.tipoVariable = pinstanscreateService.tipoVariable;
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
        $scope.pinstanVariables.splice(pos,1);
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
    
    $scope.EnviarIniciarProceso={
        "idproceso":$scope.$parent.proceso_actual,
        "businessKey":"businessKey",
        "description":"description",
        "person":"gary",
        "variables": $scope.pinstanVariables
    };
    
    
    $scope.IniciarProceso = function () {
        
        console.log($scope.EnviarIniciarProceso);
        
      alert("proceso inciado");
        
        pinstanscreateService.postIniciarProceso($scope.EnviarIniciarProceso);
        
        $scope.pinstanVariables=[];
    };


});
