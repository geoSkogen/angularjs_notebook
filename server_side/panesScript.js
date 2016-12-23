tabsApp = angular.module('docTabs', []);

tabsApp.directive('myTabs', function () {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    controller: ['$scope', function myTabsController($scope) {
      var panes = $scope.panes = [];
      $scope.select = function(pane) {
        angular.forEach(panes, function (pane) {
          pane.selected = false;
        });
        pane.selected = true;
      };

      this.addPane = function(pane) {
        if (panes.length === 0) {
          $scope.select(pane);
        }
        panes.push(pane);
      };
    }],
    templateUrl: 'panes_tabs.html'
  };
});

tabsApp.directive('myPane', function () {
    return {
        require: '^^myTabs',
        restrict: 'E',
        transclude: true,
        scope: {
            title: '@'
        },
        link: function (scope, element, attrs, tabsCtrl) {
            tabsCtrl.addPane(scope);
        },
        templateUrl: 'panes_show.html'
    };
});

