angular.module('formBuilder')
    .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/create');

    $stateProvider

        .state('create', {
            url: '/create',
            templateUrl: './custom/template/create.html'
        })

        .state('saved', {
            url: '/saved',
            templateUrl: './custom/template/saved.html'
        })

});
