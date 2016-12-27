var servApp = angular.module('serviceModule', []);

servApp.controller('serviceController', ['$scope', 'notify',
  function ($scope, notify) {
    $scope.message = "test";
    $scope.callNotify =  function (msg) {
      notify(msg);
    };
  }]);

  servApp.factory('notify', ['$window', function (win) {
       var msgs = [];
      return function (msg) {
        msgs.push(msg);
          if (msgs.length === 3) {
            win.alert(msgs.join('\n'));
            msgs = [];
          }
      };
  }]);
