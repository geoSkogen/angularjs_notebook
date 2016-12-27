app2.controller("thisControlHash", function ($scope, $location,  $timeout, $interval, hexafy) {
  $scope.mouseovers = 0;
  $scope.mousemoves = 0;
  $scope.togState = false;
  $scope.togName = "show"
  $scope.tog = 0;
  $scope.test = "_X_";
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
  $scope.albums = {
    UpsilonAcrux: "Radian Futura",
    SecretChiefsIII: "Book of Horizons",
    KayoDot: "Choirs of the Eye",
    SleepytimeGorillaMuseum: "In Glorious Times",
    AnimalsAsLeaders: "Weightless"
  };
$scope.master = { firstName: "enter first name", lastName: "enter last name"};
$scope.reset = function () {
  $scope.user = angular.copy($scope.master);
};
  $scope.showToggle = function () {
    if ($scope.tog == 0) {
      $scope.togName = "hide";
      $scope.togState = true;
      $scope.tog = 1;
    } else {
      $scope.togName = "show";
      $scope.togState = false;
      $scope.tog = 0;
    }
  }
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
$scope.reset();
});
