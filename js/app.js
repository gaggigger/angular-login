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
            'ngCookies'
        ])
        .config(function(laddaProvider) {
            laddaProvider.setOption({
                style: 'zoom-out',
                spinnerSize: 35,
                spinnerColor: '#ffffff'
            });
        })
        .run(function($rootScope, $cookies) {
            $rootScope.Auth = false;
            $rootScope.myCookie = $cookies.get('loginCookie');
            // console.log($rootScope.myCookie);
        });
})();