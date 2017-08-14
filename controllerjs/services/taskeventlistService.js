var app = angular.module('xCamundaAPP');

app.service('taskeventlistService', function ($http) {

    var path = "http://localhost:8080/sig/camunda/mensajes";

    return {
        getEventos: function (instanciaId) {
            global = $http.get(path + "/instancia/" + instanciaId);
            return global;
        },
        putCompletarEvento: function (evento) {
            global = $http.put(path + "/completar",evento);
            return global;
        }
    }
});