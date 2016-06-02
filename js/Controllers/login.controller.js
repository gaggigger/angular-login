(function() {
    /**
     * @name Login Controller
     * @desc This function using to control login page for login app
     * @param $http
     */

    'use strict';

    angular
        .module('login-app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$http', 'loginService'];

    function LoginController($http, loginService) {
        var self = this;
        self.checkLogin = checkLogin;
        self.users = [];

        // TODO: Defer Controller Logic to Services
        var requestParams = {
            method: 'GET',
            url: 'http://localhost:3000/users'
        }
        $http(requestParams).success(function(data) {
            self.users = data;
        }).error(function(data, status, headers, config) {
            self.messageError = "Cannot access data user";
        });

        function checkLogin(isValid) {
            self.loginLoading = true;
            self.submitted = true;
            if (isValid) {
                if (self.users['username'] == self.username && self.users['password'] == self.password) {
                    self.messageSuccess = "Congratulation! You logged in successful";
                    console.log(loginService.getUser());
                } else {
                    self.messageError = "Username or password is invalid";
                }
                self.loginLoading = false;
            }
        }
    }
})();