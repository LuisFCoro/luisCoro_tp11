let perfil = "administrador";

perfil = perfil.toLowerCase();


if(perfil === ""){
    console.log("Debe especificar el perfil de usuario");
}
else if(perfil === "administrador"){
    console.log("Usted tiene todos los privilegios de uso del sistema");
}
else if(perfil === "asistente"){
    console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos");
}
else if(perfil === "invitado"){
    console.log("Usted sólo tiene permisos de consultar datos");
}
else{
    console.log("Debe especificar un perfil válido");
}