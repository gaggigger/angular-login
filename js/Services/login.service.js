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

    loginService.$inject = ['$http', '$q'];

    function loginService($http, $q) {
        var loginService = function() {
            var self = this;
            self.getUser = getUser;

            function getUser() {
                var deferred = $q.defer();
                var requestParams = {
                    method: 'GET',
                    url: 'http://localhost:3000/users'
                }
                $http(requestParams).success(function(response) {
                    deferred.resolve(response);
                }).error(function(error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            }
        }
        return new(loginService);
    }
})();