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
        // $http({
        //     method: 'GET',
        //     url: 'http://localhost:3000/users'
        // }).success(function(data) {
        //     self.users = data;
        // }).error(function(data, status, headers, config) {
        //     console.log("Cannot access data user");
        // });
    }

})();