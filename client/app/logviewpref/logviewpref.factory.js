(function() {
  'use strict';

  angular
    .module('app')
    .factory('LogViewPref',LogViewPrefFactory);

    function LogViewPrefFactory() {

      var LogViewPrefModel = {
        loglevel: {
          debug: false,
          info: true,
          warning: true,
          error: true,
        },
        timezone: {
          TZ: '',
        }
      };

      return {

        get: function() {
          return angular.copy(LogViewPrefModel);
        },

        set: function(model) {
          LogViewPrefModel = angular.copy(model);
        },

        loglevel: function() {
          return LogViewPrefModel.loglevel;
        },

        timezone: function() {
          return LogViewPrefModel.timezone;
        },

      };
    }

})();
