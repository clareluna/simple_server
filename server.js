'use strict';
var Hapi = require('hapi');
var server = new Hapi.Server();
server.connection({ port: 4000});

server.start(function() {
	console.log('Hapi is running at: ', server.info.uri);
})

server.route([
{
	method: 'GET',
	path: '/',
	handler: function(request, reply) {
		reply('hello world');
	}
}, 
// {
// 	method: 'GET'.
// 	path: '/route1',
// 	handler: function(request, reply) {
// 		reply('welcome to route1');
// 	}
// },
// {
// 	method: 'POST',
// 	path: '/route1',
// 	handler: function(request, reply) {
// 		reply('callbacl from route1'),
// 	}
// },

]) // example of a hapi route

// app.get('/', function(req, res) {
//     res.send('Hello world');
// }); this is the Express callback route

// var bodyparser = require('body-parser');
// app.use(bodyparser.json());
// app.use(bodyparser.urlenclosed({
// 	extended: true
// });
