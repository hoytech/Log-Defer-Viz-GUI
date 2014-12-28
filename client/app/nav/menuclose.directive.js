(function() {
  'use strict';

  angular
    .module('app')
    .directive('stopMenuClose', stopMenuCloseDirective);

  function stopMenuCloseDirective() {
    return {
      restrict: 'A',
      link: function ($scope, element, attrs) {
        element.on('click', function(e) {
          e.stopPropagation();
        });
      }
    };
  }

})();
