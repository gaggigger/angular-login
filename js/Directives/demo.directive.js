;(function() {
    'use strict';

    angular
        .module('login-app')
        .directive('demo', demo);

    demo.$inject = [];
    function demo() {
        return {
            restrict: 'A',
            scope: {
                text: '@'
            },
            link: function(scope, element, attrs) {
                console.log( scope.text );
            }
        }
    }
})();