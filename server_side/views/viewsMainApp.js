var viewsMainApp = angular.module("viewsMainApp", ['ngRoute']);
viewsMainApp.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'main.htm'
  })
  .when('/motorhead', {
    templateUrl: 'motorhead.htm',
    controller: 'motorheadController'
  })
  .when('/blacksabbath', {
    templateUrl: 'blacksabbath.htm',
    controller: 'blacksabbathController'
  });
});

