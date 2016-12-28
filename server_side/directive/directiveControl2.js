dirAppDialog.controller('dirControlDialog', ['$scope', '$timeout', function ($scope, $timeout) {
  $scope.name = 'Doctor';
  $scope.message = '';
  $scope.hideDialog = function (message) {
    $scope.message = message;
    $scope.dialogIsHidden = true;
    $timeout(function () {
      $scope.message = '';
      $scope.dialogIsHidden = false;
    }, 2000);
  };
}]);
