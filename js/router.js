(function(angular) {
    'use strict';

    angular
        .module('login-app')
        .config(router);

    function router($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html'
            })
            .state('home', {
                url: '/home',
                'templateUrl': 'templates/home.html'
            });
    }

})(window.angular);