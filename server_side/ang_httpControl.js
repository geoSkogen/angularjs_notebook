httpApp.controller("httpControl", function ($scope, $http) {

    $http.get("customers.php").then(function (res) {
        $scope.thisData = res.data.records;
    });
});