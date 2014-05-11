var fs = require('fs');
var Routes = {};

Routes.load_all_routes = function(){
	var routes = [];
	fs.readdirSync(__dirname).forEach(function(web_directory){
		if (fs.existsSync(__dirname + '/' + web_directory + '/routes.js')){
				var tmp_array = require('./' + web_directory + '/routes');
				tmp_array.forEach(function(route){
					routes.push(route);
				});
		}
	});
	return routes;
};

module.exports = Routes;