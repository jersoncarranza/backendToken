'use strict';

var userController = require('../controllers/userCntrl');

var express = require('express');
var api = express.Router();

var md_auth_token = require('../middlewares/authenticated');

api.get('/prueba', function prueba(re, res){
    res.status(200).send({
        message:'ok to do en el servidor'
    })
});

api.post('/save-user', userController.saveUser); 
api.post('/login', userController.Login);

api.get('/list-users',  md_auth_token.ensureAuth, userController.ListarUsuario); //token


module.exports = api;