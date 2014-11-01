var app = angular.module('positivaklubben', ['ng']);

app.controller('home', ['$scope', '$http', function($scope, $http)
{
	$scope.Tasks = [];

	var task = {
		name: "Tapetsera",
		description: "Tapetsera övanvåningen",
		createdby: "Anton Winblad",
		due: "2014-11-12",
		starttime: "09:00",
		endtime: "20:00",
		comments: [{
					   content: "AWSOME, jag kommer!",
					   createdby: "Victor Öhrström"
				   }]
	};

	//$http.post('http://localhost:8000/task', task).success(function(data)
	//{
	//	alert('done');
	//});

	$http.get('http://localhost:8000/tasks').success(function(data)
	{
		$scope.Tasks = data;
	});
}]);