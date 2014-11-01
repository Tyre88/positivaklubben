var app = angular.module('positivaklubben', ['ng']);

app.controller('home', ['$scope', '$http', function($scope, $http)
{
	$scope.Title = "Hello world";

	$scope.Tasks = [{taskdescription: "test", taskname: "HEJ"}];

	$http.get('http://localhost:8000/tasks').success(function(data)
	{
		$scope.Tasks = data;
	});
}]);