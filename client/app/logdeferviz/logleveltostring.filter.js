(function() {
  'use strict';

  angular
    .module('app')
    .filter('logLeveltoString',logLeveltoStringFilter);

  function logLeveltoStringFilter() {
    return function(level) {

      var levels = {
        '40': 'debug',
        '30': 'info',
        '20': 'warning',
        '10': 'error'
      };

      if (levels[level]) {
        return levels[level];
      }

      return level;

    };
  }

})();
