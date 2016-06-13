;(function() {
    /**
     * @name Setting Module
     * @desc This function using to setter module and dependency
     * @param
     */

    'use strict';

    angular
        .module('login-app', [
            'angular-ladda',
            'ui.router',
            'ngCookies',
            'satellizer'
        ])
        .config(function(laddaProvider, $authProvider) {
            laddaProvider.setOption({
                style: 'zoom-out',
                spinnerSize: 35,
                spinnerColor: '#ffffff'
            });

            $authProvider.facebook({
                clientId: '124937647928931',
                name: 'login with facebook',
                url: '/auth/facebook'
            });
        })
        .run(function($rootScope, $cookies) {
            $rootScope.Auth = false;
            $rootScope.loginCookie = $cookies.getObject('loginCookie');

        });
})();