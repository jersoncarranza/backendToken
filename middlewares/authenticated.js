'use strict';

var jwt = require('jwt-simple');
var secret = 'calve_secreta';
var moment = require('moment');

exports.ensureAuth = function(req, res, next){

    console.log('listo ');
    if(!req.headers.authorization){
        return res.status(403).send({message:'la peticion no tiene cabecera'})
    }

    var token = req.headers.authorization.replace(/['"]+/g,'');

    try{

        var payload = jwt.decode(token,secret);

        if(payload.exp <= moment().unix()){
            return res.status(200).send({
                message:'EL token ha expirado'
            });
        }
    }catch(error){
        return res.status(200).send({
            message:'Error en el server, no es valido el token'
        });
    }

    req.user = payload;
    next();
}
