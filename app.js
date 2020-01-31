'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


var user_routes = require('./routes/routeuser');


app.use('/api', user_routes);

module.exports = app;