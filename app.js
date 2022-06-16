var express = require('express')
global.app = express();
var config = require('./config').config

var bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

require('./rutas.js')


app.use('/',express.static(__dirname + '/Pagina'))

app.listen(3000,function(){
    console.log('server ready in port 3000')
})