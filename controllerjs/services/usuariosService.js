angular.module('xCamundaAPP')
.factory('usuariosService', function ($http) {
    var path = "http://localhost:8080/sig/camunda/usuarios";   
    
    return {            
        getUsuarios: function(){
            global = $http.get(path + "/lista/");
            return global;
        },
        setUsuario: function(usuario){
            global = $http.post(path + "/crear/", usuario);
            return global;
        },
        getProcesosUsuario: function(usuario_id){
            global = $http.get("http://localhost:8080/sig/camunda/procesos/" + usuario_id);
            //console.log("user: " + usuario_id);
            return global;
        },       
        getProcesos: function(){
            global = $http.get("http://localhost:8080/sig/camunda/procesos/demo");
            return global;
        },
        agregarProcesoUsuario: function(){
            global = $http.get("http://localhost:8080/sig/camunda/procesos/demo");
            return global;
        }, 	
	}
    
});