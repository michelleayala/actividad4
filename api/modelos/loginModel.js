var loginModel = {}
var datos = [];

loginModel.iniciarSaludo = function(post,callback){
    datos.push({nombre:post.nombre,apellido:post.apellido})
    return callback({mensaje:"Bienvenid@ "+ post.nombre + ' ' + post.apellido})
}

module.exports.loginModel = loginModel;