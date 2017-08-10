angular.module('xCamundaAPP')
.factory('pinstanslistService', function ($http) {
    var path = "http://localhost:8080/sig/camunda/instancias";   
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