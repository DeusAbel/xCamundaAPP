var app = angular.module('xCamundaAPP');
app.controller('pinstanscreateController', function ($scope,pinstanscreateService) {

<<<<<<< HEAD
=======
    console.log("instanscreateController");
    $scope.pinstanVariables = pinstanscreateService.pinstanVariables;
    $scope.tipoVariable = pinstanscreateService.tipoVariable;
>>>>>>> 1d694c528dec815c882a192b2c72a5334520d2dc

//    $scope.pinstanVariables = [
//        {
//            "nombre": "Nombre",
//            "tipo": "String",
//            "valor": "Gary",
//            "modificar": true
//        },
//        {
//            "nombre": "monto",
//            "tipo": "int",
//            "valor": "1000",
//            "modificar": true
//        }
//    ];
//
//    $scope.tipoVariable = [
//        {
//            "valor": "int",
//            "texto": "Numero"
//        },
//        {
//            "valor": "String",
//            "texto": "Texto"
//        },
//        {
//            "valor": "date",
//            "texto": "Fecha"
//        }
//    ];

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
        $scope.pinstanVariables.splice(pos,1);
    };

    $scope.AgregarVariable = function () {

        $scope.nuevaVariable = {
            "nombre": "",
            "tipo": "",
            "valor": "",
            "modificar": true
        };

        $scope.pinstanVariables.push($scope.nuevaVariable)
    };
    
    $scope.IniciarProceso = function () {
      alert("proceso inciado");  
    };


});
