//call the controller method of the module object,
//passing the controller name, and a callback
//with a parameter that will become the object whose properties
//are the variables bound to the ng-model declaration
//it's like accessing the controller's namespace . . . ?
app.controller('thisControl', function ($scope) {
  $scope.firstName="Joseph";
  $scope.lastName="Skogen";
});
