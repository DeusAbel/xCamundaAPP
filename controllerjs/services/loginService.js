angular.module('xCamundaAPP')
	.factory('loginService', function($http){
		var path = "http://localhost/usuarios/";

		var usuario = 
			{
				"id" : "0",
	            "nombre" : "Roycer",
				"clave" : "1234",
				"nombreCompleto" : "Roycer Gay"
			};

		return {                        	
			loginUser : function(user){
				if (user.nombre == usuario.nombre && user.clave == usuario.clave){
					
					return usuario;
				}
				else
					return null;
			}
        }
	});