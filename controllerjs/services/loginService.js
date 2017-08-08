var app = angular.module('xCamundaAPP');

app.service('loginService', function($http){
	var path = "http://localhost/usuarios/";

    this.usuario = 
        {
            "id" : "0",
            "nombre" : "Roycer",
			"clave" : "1234",
			"nombreCompleto" : "Roycer Gay"
        };
	var myHeaders = {
			'accept': 'application/json',
			'accept-encoding': 'gzip, deflate',
			'accept-language': 'en-US,en;q=0.8',
			'content-type': 'application/json',
			'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
	}
		
	this.loginUser = function(user){
		//var global = $http.post(path+'id', user, config);
		/*if (global!=null){
			this.usuario = user;
			return this.usuario
		}else{
			return null;
		}*/
		console.log(user.nombre + "/" + this.usuario.nombre);
		if (user.nombre == this.usuario.nombre && user.clave == this.usuario.clave)
			return this.usuario;
		else
			return null;
	}

});