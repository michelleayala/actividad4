var loginModel = require('../modelos/loginModel.js').loginModel

var loginControler = {}

loginControler.iniciarSaludo = function(request,response){
    var nomb = request.body.nombre
    var apell = request.body.apellido
    var Direccion = request.body.Direccion

    if(nomb == undefined || nomb == null || nomb == ''){
        response.json({state:false,mensaje:"Dato Nombre incorrecto"})
        return false;
    }
    
    if(nomb.length <= 4){
        response.json({state:false,mensaje:"El Nombre debe tener mas de 4 caracteres"})
        return false;
    }
    
    if(nomb.length >= 15){
        response.json({state:false,mensaje:"El Nombre debe tener menos de 15 caracteres"})
        return false;
    }
    
    if(apell == undefined || apell == null || apell == ''){
        response.json({state:false,mensaje:"Dato Apellido incorrecto"})
        return false;
    }
    
    if(Direccion == undefined || Direccion == null || Direccion == ''){
        response.json({state:false,mensaje:"Dato Direccion incorrecto"})
        return false;
    }
    var post = {
       nombre:nomb,
       apellido:apell,
    }
    
    loginModel.iniciarSaludo(post,function(resultado){
        response.json(resultado)
    })

}
module.exports.login = loginControler;