angular.module("listCompApp").config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
          when('/', {
              templateUrl: 'landing-page.html'
          }).
          when('/albums', {
              template: '<album-list></album-list>'
          }).
          when('/albums/:albumId', {
              template: '<album-details></album-details>'
          }).
          otherwise('/albums');
    }
 ]);
