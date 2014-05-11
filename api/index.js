global.app = {}; //setting our global variable
app.settings = require('../settings');
app.lodash = require('lodash');
app.Hapi = require('hapi');
app.Joi = require('joi');
console.log('Settings :', app.settings);

var server = new app.Hapi.Server(app.settings.HOST, app.settings.PORT, {cors: true});
var routes = require('./routes').load_all_routes();
console.log('Routes : ',routes);
server.route(
    routes
);

server.start(function() {
    console.log('Server started at: ' + server.info.uri);
});
