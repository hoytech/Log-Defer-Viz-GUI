(function() {
  'use strict';

  angular
    .module('app')
    .factory('LogViewPref',LogViewPrefFactory);

    function LogViewPrefFactory() {

      var LogViewPrefModel = {
        debug: false,
        info: true,
        warning: true,
        error: true,
      };

      return {

        get: function() {
          return angular.copy(LogViewPrefModel);
        },

        set: function(model) {
          LogViewPrefModel = angular.copy(model);
        },

      };
    }

})();
