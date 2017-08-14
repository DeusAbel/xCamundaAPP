var app = angular.module('xCamundaAPP');

app.service('pinstanscreateService', function($http){
    
	var path = "http://localhost:8080/sig/camunda";

		
     return {
			postIniciarProceso: function(dato){
				console.log(dato);
        		global = $http.post(path + "/procesos/iniciar",dato);
        		return global;
        	}
        }
});