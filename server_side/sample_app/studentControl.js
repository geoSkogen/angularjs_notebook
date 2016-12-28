mainApp.controller('studentControl', function ($scope) {
    $scope.student = {
        first: 'P.',
        middle: 'Horace',
        last: 'Moozelthoop',
        ID: '8964',
        courses: [
          { name: 'Ethnomethodology', ID: 'SOC 333',CRN: '8460', prof: 'Liberman' },
          { name: 'Chinese Art History', ID: 'ARH 240', CRN: '8433', prof: 'Stein' },
          { name: 'Spanish Literature', ID: 'SPN 403', CRN: '51205', prof: 'Flores' },
          { name: 'Research Methods I', ID: 'SOC 397', CRN: '8640', prof: 'Liberman' },
         ],
         fullName: function () {
           var studObj = $scope.student;
           return studObj.first + " " + studObj.middle + " " + studObj.last;   
         }
    };
});

