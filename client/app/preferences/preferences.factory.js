(function() {
  'use strict';

  angular
    .module('app')
    .factory('Preferences',PreferencesFactory);

    function PreferencesFactory() {

      var PreferencesModel = {
        loglevel: {
          debug: false,
          info: true,
          warning: true,
          error: true,
        },
        timezone: {
          TZ: '',
        },
        show_pinned: false,
      };

      return {

        get: function() {
          return PreferencesModel;
        },

        set: function(model) {
          PreferencesModel = model;
        },

        loglevel: function() {
          return PreferencesModel.loglevel;
        },

        timezone: function() {
          return PreferencesModel.timezone;
        },

      };
    }

})();
