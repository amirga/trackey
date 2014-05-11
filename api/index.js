global.app = {}; //setting our global variable
app.settings = require('../settings');
app.lodash = require('lodash');
app.Hapi = require('hapi');
app.Joi = require('joi');

var PORT = process.env.PORT || 5000;
var routes = require('./routes');
var server = new app.Hapi.Server('localhost', PORT, {cors: true});
console.log(routes);
server.route(
    routes
);

server.start(function() {
    console.log('Server started at: ' + server.info.uri);
});
