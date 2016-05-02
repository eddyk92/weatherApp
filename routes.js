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


