global.app = {}; //setting our global variable
app.dirname = __dirname;
app.settings = require('./settings');
app.lodash = require('lodash');
app.Hapi = require('hapi');
app.Joi = require('joi');

var server = new app.Hapi.Server(app.settings.HOST, app.settings.PORT, app.settings.HAPI_OPTIONS);
var api_routes = require('./api/routes').load_all_routes();
var web_routes = require('./web/routes').load_all_routes();
var routes = web_routes.concat(api_routes);
routes.forEach(function(route){
	console.log('Route: ' + route.method + '\t' + server.info.uri + route.path);
});

server.route(
	routes
);

server.start(function() {
    console.log('Server started at: ' + server.info.uri);
});
