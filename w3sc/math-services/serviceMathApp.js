var serviceMathApp = angular.module("serviceMathApp",[]);
//create a 'factory-settings-level' service called MathService,
// which returns a javaScript object, one of whose methods is multiply,
//which returns the product of two arguments.
serviceMathApp.factory("MathService", function () {
  var factory = {};
  factory.multiply = function (a,b) {
    return a * b;
  };
  return factory;
});
//create a service Calc which accepts another--in this case Math--
//service as an argument, adds to CalcService the method square which 
//accepts one argumemt and returns the results of its argument's method
serviceMathApp.service("CalcService", function (MathService) {
  this.square = function (a) {
    return MathService.multiply(a,a);
  };
});
