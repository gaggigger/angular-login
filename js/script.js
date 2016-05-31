(function(angular) {
    'use strict';

    angular
        .module('login-app', ['angular-ladda'])
        .config(function (laddaProvider) {
            laddaProvider.setOption({
                /* optional */
                style: 'zoom-out',
                spinnerSize: 35,
                spinnerColor: '#ffffff'
            });
        })
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', '$http'];

    function LoginController($scope, $http) {
        $scope.users = [];

        $http({
            method: 'GET',
            url: 'http://localhost:3000/users'
        }).success(function(data) {
            $scope.users = data;
            // console.log(typeof $scope.users);
            // for (var key in $scope.users) {
            //     if ($scope.users.hasOwnProperty(key)) {
            //         console.log(key + ' is: ' + $scope.users[key]);
            //     }
            // }
        }).error(function(data, status, headers, config) {
            console.log("Cannot access data user");
        });

        $scope.checkLogin = function(isValid) {
            $scope.loginLoading = true;
            $scope.submitted = true;
            if (isValid) {
                if ($scope.users['username'] == $scope.username && $scope.users['password'] == $scope.password) {
                    $scope.messageSuccess = "Congratulation! You logged in successful";
                } else {
                    $scope.messageError = "Username or password is invalid";
                }
                $scope.loginLoading = false;
                $scope.users = {};
                $scope.formLogin.$setPristine();
                $scope.formLogin.$setUntouched();
            }
        }
    }

})(window.angular);
