;(function() {
    /**
     * @name Login Controller
     * @desc This function using to control login page for login app
     * @param $http
     */

    'use strict';

    angular
        .module('login-app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$http', '$location', 'loginService', '$rootScope'];

    function LoginController($http, $location, loginService, $rootScope) {
        var self = this;
        self.checkLogin = checkLogin;
        self.displayPassword = displayPassword;
        self.users = [];
        self.typeInput = 'password';
        self.isPassword = true;

        function checkLogin(isValid) {
            self.loginLoading = true;
            self.submitted = true;
            if (isValid) {
                loginService.getUser().then(function(response) {
                    if (self.username == response.username && self.password == response.password) {
                        // console.log("Congratulation! You logged in successful");
                        $location.path('/home');
                        $rootScope.Auth = true;
                    } else {
                        self.messageError = "Username or password is invalid";
                    }
                    self.loginLoading = false;
                }, function(error) {
                    console.log("Request API failed");
                });
            }
        }

        function displayPassword() {
            if (self.typeInput == 'password') {
                self.typeInput = 'text';
                self.isPassword = false;
            } else {
                self.typeInput = 'password';
                self.isPassword = true;
            }
        }
    }
})();