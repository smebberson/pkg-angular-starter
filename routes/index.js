ngApp.config(['$routeProvider',

	function ($routeProvider) {

		/* $routeProvider.when('/path/:optionalParameter?', {
			templateUrl: '/views/index.html',
			controller: 'IndexCtrl'
		}); */

		/* $routeProvider.when('/path/:requiredParameter', {
			templateUrl: '/path/index.html',
			controller: 'EditCtrl'
		}); */

		$routeProvider.otherwise({
			redirectTo: '/index'
		});
	}

]);