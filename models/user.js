'use strict';
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = Schema({

    nombre: String,
    correo: String,
    clave: String,
});

module.exports = mongoose.model('User', UserSchema);