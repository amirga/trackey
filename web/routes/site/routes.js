var controller = require('./controller');
var arr = [
	{
		method  : "GET",
		path    : "/",
        config: {
		    handler : controller.main_site
        }
	},
	{		
		method: "POST",
    	path: "/contact",
    	config: {
        	handler: controller.contact
        }
	},
    {
        method  : "GET",
        path    : "/login",
        config: {
            handler : controller.login
        }
    },
    {
        method  : "POST",
        path    : "/login",
        config: {
            handler : controller.login_post
        }
    },
    {
        method  : "GET",
        path    : "/forgot",
        config: {
            handler : controller.forgot
        }
    },
];

module.exports = arr;