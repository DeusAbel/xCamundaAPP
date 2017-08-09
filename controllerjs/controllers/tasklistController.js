var app = angular.module('xCamundaAPP');
app.controller('tasklistController', function ($scope) {

    console.log("tasklistController");

    $scope.tareasXInstancia = [
        {
            "id": "0c5d9601-7861-11e7-b54b-002100a5c998",
            "name": "usuario",
            "description": null,
            "priority": 50,
            "duedate": null,
            "createtime": 1501774387271,
            "processname": "proceso:4:eb1ba39a-7860-11e7-b54b-002100a5c998",
            "taskuniquename": "Task_0xn85j9",
            "assignee": null,
            "starttime": null,
            "endtime": null
        }
    ];
    
    $scope.AsignarTarea = function(dato){
        var pos = $scope.pinstanVariables.indexOf(dato);
        
    };
    
    $scope.CompletarTarea = function(dato){
        
    };
    
});
