var app = angular.module('xCamundaAPP');

app.service('tasklistService', function($http){
    
	var path = "http://localhost:8080/sig/camunda"; 

z
		
     return {
        	getVariable: function(procesoInstancia_id){
        		global = $http.get(path + "/variableProceso/" + procesoInstancia_id);
        		return global;
        	}
        }

});