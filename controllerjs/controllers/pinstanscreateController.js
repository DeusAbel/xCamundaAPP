var app = angular.module('xCamundaAPP');
app.controller('pinstanscreateController', function ($scope){

    console.log("instanscreateController");

      $scope.pinstanVariables = [
        {
            "nombre" : "Nombre",
            "tipo" : "String",
            "valor" : "Gary"
        },
        {
            "nombre" : "monto",
            "tipo" : "int",
            "valor" : "1000"
        }
    ];

    $scope.tipoVariable=[
        {
            "valor" : "int",
            "texto" : "Numero"
        },
        {
            "valor" : "String",
            "texto" : "Texto"
        },
        {
            "valor" : "date",
            "texto" : "Fecha"
        }
    ];

    $scope.ModificarVariable = function(){
        it('should toggle button', function() {
            expect(element(by.css('button')).getAttribute('disabled')).toBeFalsy();
            element(by.model('checked')).click();
            expect(element(by.css('button')).getAttribute('disabled')).toBeTruthy();
        });
    };


});