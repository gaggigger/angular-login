(function() {
    /**
     * @name Setting Module
     * @desc This function using to setting module and dependency
     * @param
     */

    'use strict';

    angular
        .module('login-app', [
            'angular-ladda',
            'ui.router'
        ])
        .config(function (laddaProvider) {
            laddaProvider.setOption({
                /* optional */
                style: 'zoom-out',
                spinnerSize: 35,
                spinnerColor: '#ffffff'
            });
        });
})();