(function(angular) {
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
})(window.angular);