var myApp = angular.module('myApp',[]);

myApp.factory('Data', function () {
	return { message:"I am data form a service" };
});

myApp.filter('reverse',function () {
	return function (msg) {
		return msg.split("").reverse().join("");
	}
});

myApp.filter('toCaps',function () {
	return function (msg) {
		return msg.toUpperCase();
	}
});

function firstController ($scope,Data) {
	/*$scope.data = {
		message: "I like this"
	};*/
	$scope.data = Data;
}

function secondController ($scope, Data) {
	/*$scope.data = {
		message: "I like this again"
	};*/

	$scope.data = Data;
}