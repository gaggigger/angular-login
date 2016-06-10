;(function() {
    /**
     * @name Router
     * @desc This function using to transitions between those application states
     * @param $stateProvider, $urlRouterProvider
     */

    'use strict';

    angular
        .module('login-app')
        .config(router);

    function router($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(false).hashPrefix('!');
        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginController',
                controllerAs: 'LoginCtrl',
                resolve: {
                    'abc': function($rootScope, $location) {
                        if ($rootScope.Auth == true) {
                            $location.path('/home');
                        }
                    }
                }
            })
            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html',
                controller: 'HomeController',
                controllerAs: 'HomeCtrl',
                resolve: {
                    'abc': function($rootScope, $location) {
                        if ($rootScope.Auth == false) {
                            $location.path('/login');
                        }
                    }
                }
            });
    }
})();