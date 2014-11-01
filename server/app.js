'use strict';

var express = require('express');
var app = express();
var tasks = require('./controllers/tasks');

app.use(express.json());

app.post('/task', tasks.save);

app.post('/tasksignup', tasks.signup);

app.get('/tasks', tasks.get);

app.listen(8000, function()
{
	console.log('Server running on port: 8000');
});