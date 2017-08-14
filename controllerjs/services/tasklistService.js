var app = angular.module('xCamundaAPP');

app.service('tasklistService', function ($http) {

    var path = "http://localhost:8080/sig/camunda";

    return {
        getTareas: function (instanciaId) {
            global = $http.get(path + "/tareas/listar/instancia/" + instanciaId);
            return global;
        },
        getVariablesXInstancia: function (instanciaId) {
            global = $http.get(path + "/instancias/instancia/" + instanciaId + "/variables/");
            return global;
        },
        putCompletarTarea2: function (tarea) {
            global = $http.put(path + "/tareas/taskComplete2",tarea);
            return global;
        }
    }
});
