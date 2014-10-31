'use strict';

var redis = require('redis');
var client = redis.createClient(6379, '192.168.0.36', {});

client.on('error', function(err) {
	throw err;
});

module.exports = client;