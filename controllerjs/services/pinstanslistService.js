angular.module('xCamundaAPP')
.factory('pinstanslistService', function ($http) {
    var path = "http://localhost:8080/sig/camunda/instancias/proceso";   
    return {            
        getInstansProceso: function(proceso_id){
            global = $http.get(path + "/" + proceso_id);
            return global;
        }            
    }
});