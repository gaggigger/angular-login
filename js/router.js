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
                    'checkAuthentication': function($rootScope, $location) {
                        if ($rootScope.Auth == true && Object.keys($rootScope.loginCookie).length !== 0) {
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
                    'checkAuthentication': function($rootScope, $location) {
                        if ($rootScope.Auth == false && Object.keys($rootScope.loginCookie).length === 0) {
                            $location.path('/login');
                        }
                    }
                }
            });
    }
})();