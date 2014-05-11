var controller = {};

controller.get_all_cars = function(request, reply) {
	reply({
        code: 'ok',
        data: {
            carid: 123,
            model: 'prius',
            engine: 1200,
            brand: 'toyota',
            brand_id: 1,
            model_sub: 'c'
		}
	}).type('application/json');
};

controller.get_car_by_id = function(request, reply) {
	reply({
        code: 'ok',
        data: {
            carid: request.params.id,
            model: 'prius',
            engine: 1200,
            brand: 'toyota',
            brand_id: 1,
            model_sub: 'c'
		}
	}).type('application/json');
};

module.exports = controller;