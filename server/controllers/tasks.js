'use strict';

var _ = require('underscore');
var taskModel = require('../models/task');

exports.get = function(req, res)
{
	taskModel.getAll(function(err, data)
	{
		if(err)
		{
			return res.json(503, {
				error: true
			});
		}

		res.json(200, data);
	})
};

exports.save = function(req, res)
{
	var task = _.clone(req.body);

	taskModel.save(task, function(err)
	{
		if(err)
		{
			return res.json(503, {
				error: true
			});
		}
	})
};