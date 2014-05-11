var controller = {};

controller.get_all_trips = function(request, reply) {
	reply({
        code: 'ok',
        data: [{
            id: request.params.id,
            trip_id: '1234',
            car_id: '1',
            user_id: '2',
            distance: '120',
            start: {
                lang: 23.32,
                lat: 32.0943,
                city: 'San Francisc',
                state: 'CA',
                country: 'USA'
            },
            end: {
                lang: 23.32,
                lat: 32.0943,
                city: 'San Francisc',
                state: 'CA',
                country: 'USA'
            },
            speed: {
                max: 80,
                avg: 40
            },
            gas: {
                max_saving: '49MPG',
                avg: '32MPG',
                min: '19MPG'
            }
        },
        {
            id: request.params.id,
            trip_id: '1234',
            car_id: '1',
            user_id: '2',
            distance: '120',
            start: {
                lang: 23.32,
                lat: 32.0943,
                city: 'San Francisc',
                state: 'CA',
                country: 'USA'
            },
            end: {
                lang: 23.32,
                lat: 32.0943,
                city: 'San Francisc',
                state: 'CA',
                country: 'USA'
            },
            speed: {
                max: 80,
                avg: 40
            },
            gas: {
                max_saving: '49MPG',
                avg: '32MPG',
                min: '19MPG'
            }
        },
        {
            id: request.params.id,
            trip_id: '1234',
            car_id: '1',
            user_id: '2',
            distance: '120',
            start: {
                lang: 23.32,
                lat: 32.0943,
                city: 'San Francisc',
                state: 'CA',
                country: 'USA'
            },
            end: {
                lang: 23.32,
                lat: 32.0943,
                city: 'San Francisc',
                state: 'CA',
                country: 'USA'
            },
            speed: {
                max: 80,
                avg: 40
            },
            gas: {
                max_saving: '49MPG',
                avg: '32MPG',
                min: '19MPG'
            }
        }]
	}).type('application/json');
};

controller.get_trip_by_id = function(request, reply) {
	reply({
        code: 'ok',
        data: {
            id: request.params.id,
            trip_id: '1234',
            car_id: '1',
            user_id: '2',
            distance: '120',
            start: {
                lang: 23.32,
                lat: 32.0943,
                city: 'San Francisc',
                state: 'CA',
                country: 'USA'
            },
            end: {
                lang: 23.32,
                lat: 32.0943,
                city: 'San Francisc',
                state: 'CA',
                country: 'USA'
            },
            speed: {
                max: 80,
                avg: 40
            },
            gas: {
                max_saving: '49MPG',
                avg: '32MPG',
                min: '19MPG'
            }
        }
	}).type('application/json');
};

module.exports = controller;