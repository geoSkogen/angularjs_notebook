var dirAppDialog = angular.module('dirAppDialog', []);
dirAppDialog.directive('dialogBox', function () {
  return {
    restrict: 'E',
    transclude: true,
    //I think this means that the datum for close is found in the value
    //of the on-close attribute of dialog box, making it so when ng-click
    //calls close(msg), the argument is sent to hideDialog()
    scope: {
      'close': '&onClose'
    },
    templateUrl: 'dialog_close.html'
  };
});
