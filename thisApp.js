//create a object of the module FIND OUT WHAT'S UP WITH THIS EMPTY ARRAY
var app = angular.module('thisApp', []);

var app2 = angular.module("thisApp2", []);
app2.filter('customFilter', function () {
  return function (x) {
    var c, txt = "";
    for (var i = 0; i < x.length; i++) {
      c = x[i];
      if (i % 2 == 0) {
        c = c.toUpperCase();
      }
      txt += c;
    }
    return txt;
  };
});
app2.service('hexafy', function () {
  this.toHex = function (x) {
    return x.toString(16);
  }
});
app2.filter('hexFormat', ['hexafy', function(hexafy) {
  return function (x) {
    return hexafy.toHex(x);
  };
}]);
app2.directive('reqUnderscore', function () {
  return {
    require: 'ngModel',
    link: function(scope, element, attr, mCtrl) {
      function checkScore(value) {
        if (value.indexOf("_") > -1) {
          mCtrl.$setValidity('theScore', true);
        } else {
          mCtrl.$setValidity('theScore', false);
        }
        return value;
      }
      mCtrl.$parsers.push(checkScore);
    }
  };
});

var appColor = angular.module("appColor", []);
appColor.run(function ($rootScope) {
  $rootScope.color = "blue";
});
