angular.module('xCamundaAPP')
.factory('instansUsuariosService', function ($http) {
    var path = "http://localhost:8080/sig/camunda/usuarios/lista";   
    return {            
        getInstansProceso: function(proceso_id){
            global = $http.get(path + "/proceso/" + proceso_id);
            return global;
        },
        deleteInstanciaProceso: function(instancia_id){
            global = $http.delete(path + "/" + instancia_id);
            return global;
        }
    }
});