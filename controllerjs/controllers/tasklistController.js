var app = angular.module('xCamundaAPP');
app.controller('tasklistController', function ($scope, tasklistService) {

    console.log("tasklistController");

    $scope.tareasXInstancia = [];
    //    $scope.tareasXInstancia = [
    //        {
    //            "id": "0c5d9601-7861-11e7-b54b-002100a5c998",
    //            "name": "usuario",
    //            "description": null,
    //            "priority": 50,
    //            "duedate": null,
    //            "createtime": 1501774387271,
    //            "processname": "proceso:4:eb1ba39a-7860-11e7-b54b-002100a5c998",
    //            "taskuniquename": "Task_0xn85j9",
    //            "assignee": null,
    //            "starttime": null,
    //            "endtime": null
    //        }
    //    ];

    $scope.CompletarTarea = function (dato) {
        var pos = $scope.tareasXInstancia.indexOf(dato);
    };

    $scope.pinstanVariables = [
        {
            "nombre": "Nombre",
            "tipo": "String",
            "valor": "Gary",
            "modificar": true
        },
        {
            "nombre": "monto",
            "tipo": "int",
            "valor": "1000",
            "modificar": true
        }
    ];

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
        //        it('should toggle button', function() {
        //            expect(element(by.css('button')).getAttribute('disabled')).toBeFalsy();
        //            element(by.model('checked')).click();
        //            expect(element(by.css('button')).getAttribute('disabled')).toBeTruthy();
        //        });
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
    
     $scope.ListarTareas = function (instanciaId) {
        tasklistService.getTareas(instanciaId).success(function (data) {
            $scope.tareasXInstancia = data;
            console.log($scope.tareasXInstancia);
        });
    };

    $scope.$on('instanciaId', function (evt, msg) {
        console.log(msg);
        $scope.ListarTareas(msg);

    });

   


});
