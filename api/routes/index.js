var routes = [];
var cars = require('./cars/routes');
var users = require('./users/routes');

routes = routes.concat(cars);
routes = routes.concat(users);
module.exports = routes;