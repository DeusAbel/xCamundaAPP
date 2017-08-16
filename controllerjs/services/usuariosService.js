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
            return global;
        },       
        getProcesos: function(){
            global = $http.get("http://localhost:8080/sig/camunda/procesos/demo");
            return global;
        },
        permisoProcesoUsuarioCrear: function(procesoUsuario){
            alert(procesoUsuario.usuario + " / " + procesoUsuario.proceso);
            global = $http.post("http://localhost:8080/sig/camunda/usuarios/autoriza_crear",procesoUsuario);
            return global;
        },
        permisoProcesoUsuarioLectura: function(procesoUsuario){
            alert(procesoUsuario.usuario + " / " + procesoUsuario.proceso);
            global = $http.post("http://localhost:8080/sig/camunda/usuarios/autoriza_lectura",procesoUsuario);
            return global;
        } 	
	}
    
});