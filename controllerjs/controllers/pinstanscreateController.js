var app = angular.module('xCamundaAPP');
app.controller('pinstanscreateController', function ($scope) {


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

    $scope.bolModificar = true;
    $scope.btntextoGuardarVariable = "Modificar";

    $scope.ModificarVariable = function (dato) {
        //        it('should toggle button', function() {
        //            expect(element(by.css('button')).getAttribute('disabled')).toBeFalsy();
        //            element(by.model('checked')).click();
        //            expect(element(by.css('button')).getAttribute('disabled')).toBeTruthy();
        //        });
        //alert("modificar");
        //        if ($scope.bolModificar) {
        //            $scope.bolModificar=false;
        //            $scope.btntextoGuardarVariable="Guardar";
        //        }
        //        else
        //            {
        //                $scope.bolModificar=true;
        //            $scope.btntextoGuardarVariable="Modificar";
        //            }

        var pos = $scope.pinstanVariables.indexOf(dato);
        
        //console.log($scope.pinstanVariables[0].modificar);
        
                if ($scope.pinstanVariables[0].modificar) {
                    $scope.bolModificar=false;
                    $scope.btntextoGuardarVariable="Guardar";
                }
                else
                    {
                        $scope.bolModificar=true;
                    $scope.btntextoGuardarVariable="Modificar";
                    }

    };



});
