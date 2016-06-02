(function() {
    /**
     * @name Login Service
     * @desc This function using to control login page for login app
     * @param $http
     */

    'use strict';

    angular
        .module('login-app')
        .service('loginService', loginService);

    loginService.$inject = ['$http'];

    function loginService($http) {
        var self = this;
        self.getUser = getUser;

        function getUser() {
            return "Hello World";
        }

        // TODO: Using defer,promise
    }
})();