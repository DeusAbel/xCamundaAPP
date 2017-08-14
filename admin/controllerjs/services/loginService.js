angular.module('xCamundaAPP')
	.factory('loginService', function($http){
		var path = "http://localhost:8080/sig/camunda/usuarios/login";
		return {                        	
			loginUser : function(user){					
				global = $http.post(path, user);
				return global;
			}
        }
	});