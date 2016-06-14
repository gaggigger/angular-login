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

    LoginController.$inject = ['$http', '$location', 'loginService', '$rootScope', '$cookies'/*, '$auth'*/, 'ezfb'];

    function LoginController($http, $location, loginService, $rootScope, $cookies/*, $auth*/, ezfb) {
        var self = this;
        self.checkLogin = checkLogin;
        self.displayPassword = displayPassword;
        // self.authenticate = authenticate;
        self.login = login;
        self.users = [];
        self.typeInput = 'password';
        self.isPassword = true;

        function checkLogin(isValid) {
            self.loginLoading = true;
            self.submitted = true;
            if (isValid) {
                loginService.getUser().then(function(response) {
                    if (self.username == response.username && self.password == response.password) {
                        $location.path('/home');
                        $rootScope.Auth = true;
                        $cookies.putObject('loginCookie', response);
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

        // function authenticate(provider) {
        //     $auth.authenticate(provider);
        // }

        // LOGIN WITH FACEBOOK
        function login() {
            /**
             * Calling FB.login with required permissions specified
             * https://developers.facebook.com/docs/reference/javascript/FB.login/v2.0
             */
            ezfb.login(function (res) {
              /**
               * no manual $scope.$apply, I got that handled
               */
              if (res.authResponse) {
                console.log("Login Facebook Successful");
                $location.path('/home');
                $rootScope.Auth = true;
              }
            }, {scope: 'email,user_likes'});
        }
    }
})();