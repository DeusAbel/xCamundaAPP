angular.module('xCamundaAPP')
    .factory('mainService', function ($http) {
        var path = "http://localhost:8080/sig/camunda/procesos";
        
        return {            
            getProcesos: function(){
                global = $http.get(path);
                return global;
            },   

            getProcesosUsuario: function(nombre){
                global = $http.get(path + "/" + nombre);
                return global
            }

        }
    });