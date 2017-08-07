(function(){  
  var app = angular.module('xCamundaAPP', ['ngRoute']);  

	app.config(['$locationProvider', function($locationProvider) {
		$locationProvider.hashPrefix('');
	}]);

  app.config(function($routeProvider) {        
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'controllerjs/controllers/loginController', 
        controllerAs: 'loginController'
      })

      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'controllerjs/controllers/mainController',        
        controllerAs: 'mainController'
      })

      .when('/pinstanslist', {
        templateUrl:'views/pinstanslist.html',
        controller: 'controllerjs/controllers/pinstanslistController',        
        controllerAs: 'pinstanslistController'       
      })     
      .otherwise({
        redirectTo: '/'
      });
  });



})();
