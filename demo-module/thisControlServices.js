app3.controller("thisControlServices", function ($scope) {

  $scope.thisUrl = $location.absUrl();

  $scope.thisHeader = "this is a header";
  $timeout(function () {
    $scope.thisHeader = "this a new header";
  }, 2000);

  $scope.thisTime = new Date().toLocaleTimeString();
  $interval(function () {
  $scope.thisTime = new Date().toLocaleTimeString();
  }, 1000);
});
