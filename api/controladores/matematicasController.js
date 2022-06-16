var matematicasController = {}

matematicasController.suma = function(request,response) {
    var num1 = parseInt(request.body.numero1)
    var num2 = parseInt(request.body.numero2)

    var resultado = num1 + num2

    response.json({mensaje:'El resultado es:'+ resultado})
}

matematicasController.resta = function(request,response) {
    var num1 = parseInt(request.body.numero1)
    var num2 = parseInt(request.body.numero2)

    var resultado = num1 - num2

    response.json({mensaje:'El resultado es:'+ resultado})

}

matematicasController.multiplicacion = function(request,response) {
    var num1 = parseInt(request.body.numero1)
    var num2 = parseInt(request.body.numero2)

    var resultado = num1 * num2

    response.json({mensaje:'El resultado es:'+ resultado})

}

matematicasController.division = function(request,response) {
    var num1 = parseInt(request.body.numero1)
    var num2 = parseInt(request.body.numero2)

    var resultado = num1 / num2

    response.json({mensaje:'El resultado es:'+ resultado})
}
module.exports.matematicas = matematicasController