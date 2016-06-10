;(function() {
    'use strict';

    angular
        .module('login-app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$rootScope', '$location'];

    function HomeController($rootScope, $location) {
        var self = this;
        self.logout = logout;

        function logout() {
            $rootScope.Auth = false;
            $location.path('/login');
        }
    }
})();