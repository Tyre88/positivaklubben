var app = angular.module('positivaklubben', ['ng']);

app.controller('Home', ['$scope', 'TaskService', function($scope, TaskService)
{
	$scope.Tasks = [];

	$scope.Task = angular.copy(TaskService.Task);

	$scope.Save = function()
	{
		$scope.Task.createdby = "Victor Öhrström";

		TaskService.Save($scope.Task).success(function()
		{
			$scope.Tasks.push($scope.Task);

			$scope.Task = angular.copy(TaskService.Task);
		});
	};

	TaskService.GetAll().success(function(data)
	{
		$scope.Tasks = data;
	});
}]);

app.service('TaskService', ["$http", function($http)
{
	this.Task = {
		name: "",
		description: "",
		createdby: "",
		due: "",
		starttime: "",
		endtime: "",
		comments: []
	};

	this.TaskComment = {
		content: "",
		createdby: ""
	};

	this.GetAll = function()
	{
		return $http.get('http://localhost:8000/tasks');
	};

	this.Save = function(task)
	{
		return $http.post('http://localhost:8000/task', task);
	};
}]);