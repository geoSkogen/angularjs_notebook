app2.controller("thisControlHash", function ($scope) {
  //place hashes into an array
  $scope.names = [
    {lname: 'Redjyk', fname: 'Magda', dept: 'Produce'},
    {lname: 'Glazier', fname: 'Stephanie', dept: 'Beer & Wine'},
    {lname: 'Ricker', fname: 'Chase', dept: 'Prepared Foods'}
  ];
  $scope.prices = [
    {day: 60, month: 750, year: 7000},
    {day: 10, month: 250, year: 2000},
    {day: 1200, month: 27000, year: 300000}
  ];
});
