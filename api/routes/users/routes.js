var controller = require('./controller');
var arr = [
	{
		method  : "GET",
		path    : "/api/users",
		handler : controller.get_all_users
	},
	{		
		method: "GET",
    	path: "/api/users/{id}",
    	config: {
        	handler: controller.get_user_by_id,
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