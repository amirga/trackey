var controller = {};

//set public directory public/js/..
controller.get_public = {
    directory: {
        path: app.dirname + '/web/public',
        listing: false,
        index: true
    }
};

//main site
controller.main_site = function(request, reply) {
    var view_obj = {
        title: 'main site title'
    };
    return reply.view('main', view_obj);
};

//contact us post request with data
controller.contact = function(request, reply) {
    var obj_response = {
        Error: null,
        code: 'OK',
        payload: request.payload ? request.payload : {},
        params: request.params ? request.params : {}
    };
    return reply(obj_response).type('application/json');
};

//get login page
controller.login = function(request, reply) {
    var view_obj = {
        title: 'login page'
    };
    return reply.view('main', view_obj);
};

//post login args
controller.login_post = function(request, reply) {
    var obj_response = {
        Error: null,
        code: 'OK',
        payload: request.payload ? request.payload : {},
        params: request.params ? request.params : {}
    };
    return reply(obj_response).type('application/json');
}

//forgot username/email or reset password
controller.forgot = function(request, reply) {
    var view_obj = {
        title: 'forgot -  site title'
    };
    return reply.view('main', view_obj);
};

module.exports = controller;