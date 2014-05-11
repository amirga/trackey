var controller = {};

controller.get_all_bugs = function(request, reply) {
	reply({
        code: 'ok',
        data: [{
            bug_id: request.params.id,
            carid: 1,
            bug_code: '4455',
            bug_description: 'this could be bla bla...'
        },{
            bug_id: request.params.id,
            carid: 1,
            bug_code: '4455',
            bug_description: 'this could be bla bla...'
        },{
            bug_id: request.params.id,
            carid: 1,
            bug_code: '4455',
            bug_description: 'this could be bla bla...'
        }]
	}).type('application/json');
};

controller.get_bug_by_id = function(request, reply) {
	reply({
        code: 'ok',
        data: {
            bug_id: request.params.id,
            carid: 1,
            bug_code: '4455',
            bug_description: 'this could be bla bla...'
		}
	}).type('application/json');
};

module.exports = controller;