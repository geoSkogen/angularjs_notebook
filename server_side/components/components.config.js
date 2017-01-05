angular.module("listCompApp").config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
          when('/', {
              template: '<p>where did everybody go?</p>'
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
