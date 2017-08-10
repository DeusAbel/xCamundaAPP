angular.module('xCamundaAPP')
.factory('pinstanslistService', function ($http) {
    var path = "http://localhost:8080/sig/camunda/instancias/proceso";

    var myHeaders = {
        'accept': 'application/json',
        'accept-encoding': 'gzip, deflate',
        'accept-language': 'en-US,en;q=0.8',
        'content-type': 'application/json',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
    }
    
    return {            
        getInstansProceso: function(proceso_id){
            global = $http.get(path + "/" + proceso_id);
            return global;
        }            
    }
});