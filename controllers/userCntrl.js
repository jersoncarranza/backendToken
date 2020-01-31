
'use strict';
var User = require('../models/user');

function saveUser(req, res){
    var params = req.body;

    var userSave = new User();

    userSave.nombre = params.nombre;
    userSave.correo = parmas.correo;
    userSave.clave = parmas.clave;

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