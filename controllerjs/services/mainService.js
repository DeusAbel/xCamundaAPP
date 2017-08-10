angular.module('xCamundaAPP')
    .factory('mainService', function ($http) {
        var path = "http://localhost:8080/sig/camunda/procesos/";

        var myHeaders = {
            'accept': 'application/json',
            'accept-encoding': 'gzip, deflate',
            'accept-language': 'en-US,en;q=0.8',
            'content-type': 'application/json',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
        }
        
        return {            
            getProcesos: function(){
                global = $http.get(path);
                return global;
            }   

        }
    });