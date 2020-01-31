'use strict';

var express = require('express');
var api = express.Router();

api.get('/prueba', function prueba(re, res){
    res.status(200).send({
        message:'ok to do en el servidor'
    })
});

api.post('save-user', )

module.exports = api;