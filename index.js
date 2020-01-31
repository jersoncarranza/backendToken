'use strict';

var http =  require ('http');
var PORT   = process.env.PORT || 4000;
var server_host = process.env.YOUR_HOST || '0.0.0.0'; 
var mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/backToken';
var app = require('./app');

var server = http.createServer(app);

mongoose.connect(uri,{useNewUrlParser: true ,  useUnifiedTopology: true} )
.then(()=>
{
    server.listen(PORT, server_host, function(){
        console.log('Escuchando por el puerto 4000')
    });
    
})
.catch(err => console.log(err));
