var app = angular.module('xCamundaAPP');

app.service('pinstanscreateService', function($http){
	var path = "http://localhost/instancias/";

   this.pinstanVariables = [
        {
            "nombre": "Nombre",
            "tipo": "String",
            "valor": "Gary",
            "modificar": true
        },
        {
            "nombre": "monto",
            "tipo": "int",
            "valor": "1000",
            "modificar": true
        }
    ];

    this.tipoVariable = [
        {
            "valor": "int",
            "texto": "Numero"
        },
        {
            "valor": "String",
            "texto": "Texto"
        },
        {
            "valor": "date",
            "texto": "Fecha"
        }
    ];
    
	var myHeaders = {
			'accept': 'application/json',
			'accept-encoding': 'gzip, deflate',
			'accept-language': 'en-US,en;q=0.8',
			'content-type': 'application/json',
			'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
	}
		
    

});