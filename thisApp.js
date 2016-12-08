//create a object of the module FIND OUT WHAT'S UP WITH THIS EMPTY ARRAY
var app = angular.module('thisApp', []);
var app2 = angular.module("thisApp2", []);

var appColor = angular.module("appColor", []);
appColor.run(function ($rootScope) {
  $rootScope.color = "blue";
})
