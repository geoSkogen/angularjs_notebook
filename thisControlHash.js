app2.controller("thisControlHash", function ($scope, $location,  $timeout, $interval, hexafy) {
  //place hashes into an array
  $scope.names = [
    {lname: 'Redjyk', fname: 'Magda', dept: 'Produce'},
    {lname: 'Glazier', fname: 'Stephanie', dept: 'Beer & Wine'},
    {lname: 'Ricker', fname: 'Chase', dept: 'Prepared Foods'},
    {lname: 'Garcia', fname: 'Marc', dept: 'Bakery'},
  ];
  $scope.prices = [
    {day: 60, month: 750, year: 7000},
    {day: 10, month: 250, year: 2000},
    {day: 1200, month: 27000, year: 300000}
  ];
  $scope.namesKit = [
    "Maria",
    "Julia",
    "Justina",
    "Leticia",
    "Elia",
    "Ana",
    "Orbelina"
  ];
  //this object assignment breaks script and I don't know why.
  /*$scope.albums = {
    Upsilon Acrux: "Radian Futura",
    Secret Chiefs III: "Book of Horizons",
    Kayo Dot: "Choirs of the Eye",
    Sleepytime Gorilla Museum: "In Glorious Times",
    Animals as Leaders: "Weightless"
  };*/
  $scope.changeOrder = function (x) {
    $scope.selectOrder = x;
  };
  $scope.thisUrl = $location.absUrl();

  $scope.thisHeader = "this is a header";
  $timeout(function () {
    $scope.thisHeader = "this a new header";
  }, 2000);

  $scope.thisTime = new Date().toLocaleTimeString();
  $interval(function () {
  $scope.thisTime = new Date().toLocaleTimeString();
  }, 1000);

//  $scope.hex = hexafy.toHex(Number(225));

});
