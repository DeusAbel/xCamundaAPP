var app = angular.module('xCamundaAPP');

app.service('tasklistService', function($http){
    
	var path = "http://localhost:8080/sig/camunda/tareas/listar/instancia"; 
	
     return {
        	getTareas: function(instanciaId){
        		global = $http.get(path + "/" + instanciaId);
        		return global;
        	}
        }

});