'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.0.36/positivaklubben');

var db = mongoose.connection;

db.on('error', function(err)
{
	throw err;
});

db.once('open', function()
{
	console.log('connection established with database');
});

module.exports = mongoose;