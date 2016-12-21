var dirApp = angular.module("dirApp", []);
//<student> as an html tag, which is an incidence of
//the directive student, has these following properties
dirApp.directive('student', function () {
  return {
  //dirObj can only be an html element
    restrict: 'E',
    //the datum for the current object student is found
    //in the current element's name attribute
    scope: {
      student: "=name"
    },
    //this replaces the <student> element
    template: "student: <b>{{ student.name }}</b>, reg: <b>{{ student.reg }}<b/>",
    //linkFunction links to each element
    link: function($scope, element, attributes) {
      element.html("student: <b>" + $scope.student.name +
        "</b> reg: <b>" + $scope.student.reg + "</b>");
      element.css('background-color', 'lightsteelblue');
      element.css('border', '2px solid black');
      element.css('padding', '5px');
      element.css('margin', '5px');
    }
  };
});
