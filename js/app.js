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
        .config(function(laddaProvider, $authProvider, facebookAppID) {
            laddaProvider.setOption({
                style: 'zoom-out',
                spinnerSize: 35,
                spinnerColor: '#ffffff'
            });

            $authProvider.facebook({
                clientId: 'facebookAppID',
                display: 'popup',
                popupOptions: { width: 481, height: 269 }
            });
            $authProvider.withCredentials = false;
            $authProvider.loginRedirect = null;
            $authProvider.tokenName = 'entities';
        })
        .run(function($rootScope, $cookies) {
            $rootScope.Auth = false;
            $rootScope.loginCookie = $cookies.getObject('loginCookie');
        });
})();