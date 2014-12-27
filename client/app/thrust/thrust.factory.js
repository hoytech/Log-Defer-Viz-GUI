(function() {
  'use strict';

  angular
    .module('app')
    .factory('Thrust',ThrustFactory);

  function ThrustFactory($rootScope) {

    var ThrustModel = {
      messages: []
    };

    return {

      initialize: function() {
        var self = this;

        THRUST.remote.listen(function(msg) {
          self.add(msg);
        });

        THRUST.remote.send({ message: 'ready' });

      },

      add: function(msg) {
        if (msg) {
          ThrustModel.messages.push(msg);
          $rootScope.$broadcast('new-msg');
        }
      },

      get: function(current) {
        if (current !== undefined) {
          return ThrustModel.messages.slice(current);
        }
        return ThrustModel.messages;
      }

    };
  }

})();
