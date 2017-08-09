var app = angular.module('xCamundaAPP');

app.service('mainService', function($http){
    var path = "http://localhost:8080/sig/camunda/procesos";

    //servicio.procesos=[];

	var myHeaders = {
			'accept': 'application/json',
			'accept-encoding': 'gzip, deflate',
			'accept-language': 'en-US,en;q=0.8',
			'content-type': 'application/json',
			'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
    }
    
    this.procesos="";

    this.setProcesos = function(oProcesos){
        this.procesos = oProcesos;
    };
    this.ss =function(){
        return this.procesos;
    };

	this.getProcesos = function(){
        //var global = [{"nombre":"hola"},{"nombre":"gg"}];
        var config = { headers:  myHeaders };
        //var global=$http.get(path);        
        var request = $http.get(path)
            .then(function (data) {
                this.procesos = data.data;          
                console.log(request);
                //console.log("http: "+this.procesos);                  
            }, function(data) {          
                console.log("error: " + data);
        });

        //console.log(request);
        
        /*$http.get(path).success(function (data) {
            console.log("datos1: "+data);
            this.procesos = data.data;
            console.log("datos2: "+data);
        })*/

        //console.log(oProcesos);
     
		/*if (global!=null){
			this.procesos = global;
			return this.procesos;
		}else{
			return null;
        }*/
		
		/*
		if (user.nombre == this.usuario.nombre && user.clave == this.usuario.clave)
			return this.usuario;
		else
			return null;
        */
        /*console.log("service"+this.procesos);*/
        return this.procesos;
    }
});