var express = require('express')
var app = express();

var bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))


app.post("/suma", function(request,response){

    var num1 = parseInt(request.body.numero1)
    var num2 = parseInt(request.body.numero2)

    var resultado = num1 + num2

    response.json({mensaje:'El resultado es:'+ resultado})

})

app.post("/resta", function(request,response){

    var num1 = parseInt(request.body.numero1)
    var num2 = parseInt(request.body.numero2)

    var resultado = num1 - num2

    response.json({mensaje:'El resultado es:'+ resultado})

})

app.post("/multiplicacion", function(request,response){

    var num1 = parseInt(request.body.numero1)
    var num2 = parseInt(request.body.numero2)

    var resultado = num1 * num2

    response.json({mensaje:'El resultado es:'+ resultado})

})

app.post("/division", function(request,response){

    var num1 = parseInt(request.body.numero1)
    var num2 = parseInt(request.body.numero2)

    var resultado = num1 / num2

    response.json({mensaje:'El resultado es:'+ resultado})

})

app.post("/iniciarSaludo", function(request,response){
    var nomb = request.body.nombre
    var apell = request.body.apellido
    var Saludo = nomb + "" + apell

    response.json({mensaje:'Bienvenido:'+ Saludo})

})


app.use('/',express.static(__dirname + '/Pagina'))

app.listen(3000,function(){
    console.log('server ready in port 3000')
})