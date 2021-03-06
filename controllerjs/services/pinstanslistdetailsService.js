var app = angular.module('pinstanslistdetailsService', []);

app.factory('pinstanslistdetailsRequest', function ($http) {
	
        var path = "http://localhost/xCamunda";        

        var myHeaders = {
            'accept': 'application/json',
            'accept-encoding': 'gzip, deflate',
            'accept-language': 'en-US,en;q=0.8',
            'content-type': 'application/json',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
        }

        return {
        	getVariable: function(procesoInstancia_id){
        		global = $http.get(path + "/variableProceso/" + procesoInstancia_id);
        		return global;
        	}
        }
    });