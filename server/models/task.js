'use strict';

var mongoose = require('../lib/mongoose');

var taskSchema = mongoose.Schema({
	name: String,
	description: String,
	createdby: String,
	createddate: {type: Date, default: Date.now},
	due: String,
	starttime: {type: String, index: true},
	endtime: {type: String, index: true},
	comments: [{
				content: String,
				createdby: String,
				date: {type: Date, defaults: Date.now}
			   }]
});

var Task = mongoose.model('task', taskSchema);

exports.getAll = function(callback)
{
};

exports.get = function(id, callback)
{
};

exports.save = function(task, callback)
{
	if(!task)
	{
		return callback(null, null);
	}

	task = new Task(task);
	task.save(function(err)
	{
		if(err)
		{
			return callback(err, null);
		}
	});
};

exports.signup = function(taskSignup, callback)
{
	if(!taskSignup)
	{
		return callback(null, null);
	}
};