var Hapi = require('hapi');
var routes = require('./routes')(Hapi);
var config = require('../config');
var server = Hapi.createServer('localhost',process.env.PORT || 3000);

server.route([{
	method: 'GET',
	path: '/vote/sms',
	handler: routes.voteSMS
}]);
server.start();

