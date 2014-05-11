var controller = require('./controller');
var arr = [
	{
		method  : "GET",
		path    : "/api/cars",
		handler : controller.get_all_cars
	},
	{		
		method: "GET",
    	path: "/api/cars/{id}",
    	config: {
        	handler: controller.get_car_by_id,
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