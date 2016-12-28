var scopeTreeEvents = angular.module("scopeTreeEvents", []);

scopeTreeEvents.controller('eventController', ['$scope', function ($scope) {
  $scope.count = 0;
  $scope.$on('anEvent', function () {
    $scope.count++;
  });
}]);
