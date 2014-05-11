var controller = require('./controller');
var arr = [
	{
		method  : "GET",
		path    : "/api/trips",
		handler : controller.get_all_trips
	},
	{		
		method: "GET",
    	path: "/api/trips/{id}",
    	config: {
        	handler: controller.get_trip_by_id,
        	validate: {
            	query: {
                	params: {
                    	id: app.Joi.number().required()
                	}
            	}
        	}
        }
	}
];

module.exports = arr;