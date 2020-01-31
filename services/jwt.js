'use strict';

var jwt = require('jwt-simple');
var moment = require('moment');

var secret = 'calve_secreta';

exports.createToken =  function(user){

    var payload = { 
        sub: user._id,
        iat: moment().endOf('day').fromNow(),
        exp: moment(moment()).add(1,'days').unix

    };
    return jwt.encode(payload, secret);
}

