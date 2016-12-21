//creates an app controller which takes CalcService as an argument
//along which $scope; its square method is assigned to a $scope
//method square() which handles the data binding of the input and output
//ng-model variables
serviceMathApp.controller('serviceMathControl',
  function ($scope, CalcService) {
  $scope.square = function () {
    $scope.result = CalcService.square($scope.thisNum);
  }
});
//in this way, serviceMathControl's square() method requires
//CalsService's square() method, which requires MathService's
//multiply method.
