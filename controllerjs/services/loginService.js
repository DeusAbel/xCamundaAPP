var app = angular.module('loginService');

app.factory('loginRequest', function($http){
		var path = "http://localhost/usuarios/";
		
    this.pinstanslist = [
        {
            "id" : "123456789",
            "businessKey" : "Instancia Proceso 1.1",
            "fecha" : "01/07/2017"
        },        {
            "id" : "123456789",
            "businessKey" : "Instancia Proceso 1.2",
            "fecha" : "02/07/2017"
        },        {
            "id" : "123456789",
            "businessKey" : "Instancia Proceso 1.3",
            "fecha" : "03/07/2017"
        },        {
            "id" : "123456789",
            "businessKey" : "Instancia Proceso 1.4",
            "fecha" : "04/07/2017"
        },
    ];
		var myHeaders = {
	            'accept': 'application/json',
	            'accept-encoding': 'gzip, deflate',
	            'accept-language': 'en-US,en;q=0.8',
	            'content-type': 'application/json',
	            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
	        }
		
		return {
			checkLogin: function(user){
				var config = { headers:  myHeaders }
				
				global = $http.post(path + 'checkLogin', user, config);

			}
		}
	})