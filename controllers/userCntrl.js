
'use strict';
var User = require('../models/user');
var jwt = require('../services/jwt');

function saveUser(req, res){
    var params = req.body;

    var userSave = new User();

    userSave.nombre = params.nombre;
    userSave.correo = params.correo;
    userSave.clave = params.clave;

    saveUserPrueba(userSave).then((value) =>{
        return res.status(200).send({ usuario: value.data ,  status:value.status });
    })
}


async function saveUserPrueba(userSave){
 
    let save = await userSave
    .save()
    .then( saveObj => {

        if(saveObj){
            var data = {
                data: saveObj,
                status: 1
            }
            return Promise.resolve(data);
        }else{

            var data = {
                data: err,
                status: 0 
            }
            return Promise.reject(data);
        }

    });
    
    return Promise.resolve(save);
    
}
/**Login */

function Login(req, res){

    var params = req.body;
    var correoEntrada = params.correo;
    var claveEntrante =params.clave; 

    User.findOne({ correo: correoEntrada, clave: claveEntrante}, (err, userResult) =>{

        if(userResult){
            return res.status(200).send({
                token : jwt.createToken(userResult),
                status:1
            })
        }else{
            return res.status(200).send({
                status:0,
                messagge:'no se encontro el usuario'
            })
        }

    })

}
/****Listar usuarios*/

function ListarUsuario(req, res){

  
    User.find()
    .exec((err, docs)=>{

        return res.status(200).send({users: docs });
    })
}

module.exports = {
    saveUser,
    Login,
    ListarUsuario
}
