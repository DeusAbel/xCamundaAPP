var app = angular.module('loginService');

app.factory('loginRequest', function($http){
		var path = "http://localhost/usuarios/";
		
    this.usuario = [
        {
            "id" : "0",
            "nombre" : "anonimo",
            "clave" : "anonimo"
        }
    ];
	var myHeaders = {
			'accept': 'application/json',
			'accept-encoding': 'gzip, deflate',
			'accept-language': 'en-US,en;q=0.8',
			'content-type': 'application/json',
			'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
	}
		
	this.UpdateUser = function(usuario){
			var global = $http.post(path + 'checkLogin', user, config);
			if (global!=null){
				this.usuario = usuario;
				return this.usuario
			}



		var res = $http.post(path, dataObj);
		res.success(function(data, status, headers, config) {
			$scope.message = data;
		});
		res.error(function(data, status, headers, config) {
			alert( "failure message: " + JSON.stringify({data: data}));
		});	
	}
});