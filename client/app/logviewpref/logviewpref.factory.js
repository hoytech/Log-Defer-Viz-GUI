(function() {
  'use strict';

  angular
    .module('app')
    .factory('LogViewPref',LogViewPrefFactory);

    function LogViewPrefFactory() {
      /*
        10 = error
        20 = warning
        30 = info
        40 = debug
      */

      var LogViewPrefModel = {
        error: true,
        warning: true,
        info: true,
        debug: false,
      };

      return {

        get: function() {
          return angular.copy(LogViewPrefModel);
        },

        set: function(model) {
          LogViewPrefModel = angular.copy(model);
        },

        is_level_enabled: function(level) {

          if (level === 10 && LogViewPrefModel.error ) {
            return true;
          }

          if (level === 20 && LogViewPrefModel.warning ) {
            return true;
          }

          if (level === 30 && LogViewPrefModel.info ) {
            return true;
          }

          if (level === 40 && LogViewPrefModel.debug ) {
            return true;
          }

          return false;

        }

      };
    }

})();
