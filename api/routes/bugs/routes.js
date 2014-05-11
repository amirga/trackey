var controller = require('./controller');
var arr = [
	{
		method  : "GET",
		path    : "/api/bugs",
		handler : controller.get_all_bugs
	},
	{		
		method: "GET",
    	path: "/api/bugs/{id}",
    	config: {
        	handler: controller.get_bug_by_id,
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