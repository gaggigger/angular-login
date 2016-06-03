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

    LoginController.$inject = ['$http', '$location', 'loginService', '$rootScope'];

    function LoginController($http, $location, loginService, $rootScope) {
        var self = this;
        self.checkLogin = checkLogin;
        self.users = [];

        function checkLogin(isValid) {
            self.loginLoading = true;
            self.submitted = true;
            if (isValid) {
                loginService.getUser().then(function(response) {
                    if (response.username == self.username && response.password == self.password) {
                        console.log("Congratulation! You logged in successful");
                        $rootScope.Auth = true;
                        $location.path('/home');
                    } else {
                        self.messageError = "Username or password is invalid";
                    }
                    self.loginLoading = false;
                }, function(error) {
                    console.log("Request API failed");
                });
            }
        }
    }
})();