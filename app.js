// my module
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// routes
weatherApp.config(function($routeProvider){
	$routeProvider

	.when('/', {
		templateUrl: 'pages/home.htm',
		contorller: 'homeController'
	})

		.when('/forecast', {
		templateUrl: 'pages/forecast.htm',
		contorller: 'forecastController'
	})

		.when('/forecast/:days', {
		templateUrl: 'pages/forecast.htm',
		contorller: 'forecastController'
	})
});

// services
weatherApp.service('cityService', function(){
	this.city = "New York, NY";
});


// controllers

weatherApp.controller('homeController', ['$scope', 'cityService' function($scope, cityService){

	$scope.city = cityService.city;

	$scope.$watch('city', function(){
		cityService.city = $scope.city;
	});

}]);

weatherApp.controller('forecastController', ['$scope', '$resource','$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService){

	$scope.city = cityService.city;

	$scope.days = $routeParams.days || '2';

	$scope.weatherAPI = 
	$resource("http://api.openweathermap.org/data/2.5/forecaste/daily?APPID=68305c3a757f773623a6c760d8b146b1", {callback: "JSON_CALLBACK"}, {get: { method: "JSONP"}});

		$scope.weatherResult = $scope.weatherAPI.get({ q: #scope.city, cnt: 2 });

		$scope.convertToFahrenheit = function(degk){
			return Math.round((1.8 * (degk - 273)) + 32);
		}

		$scope.covertToDate = function(dt){
			return new Date(dt * 1000);
		}

}]);