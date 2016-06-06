(function() {
    /**
     * @name Router
     * @desc This function using to transitions between those application states
     * @param $stateProvider, $urlRouterProvider
     */

    'use strict';

    angular
        .module('login-app')
        .config(router);

    function router($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginController',
                controllerAs: 'LoginCtrl'
            })
            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html'
            });
    }
})();