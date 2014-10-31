'use strict';

var redis = require('../lib/redis');

exports.getAll = function(callback)
{
	redis.lrange('tasks', 0, -1, function(err, data)
	{
		if(err)
		{
			return callback(err, null);
		}

		callback(null, data.map(JSON.parse));
	})
};

exports.save = function(task, callback)
{
	if(!task)
	{
		return callback(null, null);
	}

	redis.lpush('tasks', JSON.stringify(task), function(err)
	{
		if(err)
		{
			return callback(err, null);
		}
	})
};