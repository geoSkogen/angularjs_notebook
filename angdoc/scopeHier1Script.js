var scopeHier1App = angular.module("scopeHier1App", []);

scopeHier1App.controller("greetController", ['$scope','$rootScope',
  function ($scope, $rootScope) {
    $scope.name = "cheese department";
    $rootScope.department = "cheese";
  }]);

scopeHier1App.controller('listController', ['$scope',
  function ($scope) {
    $scope.names = [ 'Amanda', 'Jewls', 'Karen' ];
  }]);
document.getElementById("testMe").innerHTML = "helloAngular";
