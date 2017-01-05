angular.module("albumDetails").component('albumDetails', {
    template: 'view for <span>{{ $ctrl.albumId}}</span>',
    controller: ['$routeParams',
        function albumDetailsController($routeParams) {
            this.albumId = $routeParams.albumId;
        }
     ]
});