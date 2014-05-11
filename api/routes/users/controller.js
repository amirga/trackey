var controller = {};

controller.get_all_users= function(request, reply) {
	reply({
        code: 'ok',
        data: [{
            id: '1234',
            user_id: '1234',
            permission: 'admin',
            verified: true,
            active: true,
            phone: '515155151515',
            email: 'user@test.com'
		},{
            id: '1234',
            user_id: '1234',
            permission: 'admin',
            verified: true,
            active: true,
            phone: '515155151515',
            email: 'user@test.com'
        },{
            id: '1234',
            user_id: '1234',
            permission: 'admin',
            verified: true,
            active: true,
            phone: '515155151515',
            email: 'user@test.com'
        },{
            id: '1234',
            user_id: '1234',
            permission: 'admin',
            verified: true,
            active: true,
            phone: '515155151515',
            email: 'user@test.com'
        }]
	}).type('application/json');
};

controller.get_user_by_id = function(request, reply) {
	reply({
        code: 'ok',
        data: {
            id: request.params.id,
            user_id: '1234',
            permission: 'admin',
            verified: true,
            active: true,
            phone: '515155151515',
            email: 'user@test.com'
        }
	}).type('application/json');
};

module.exports = controller;