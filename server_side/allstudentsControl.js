allstudentsApp.controller('allstudentsControl', function ($scope, $http) {
    $http.get('students.php').then(function (res) {
        $scope.thisData = res.data.names;
    });
});