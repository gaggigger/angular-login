;(function() {
    'use strict';

    angular
        .module('login-app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$rootScope', '$location', 'ezfb'];

    function HomeController($rootScope, $location, ezfb) {
        var self = this;
        self.logout = logout;

        function logout() {
            ezfb.logout(function () {
                console.log('Logged out successful');
            });
            $rootScope.Auth = false;
            $location.path('/login');
        }
    }
})();