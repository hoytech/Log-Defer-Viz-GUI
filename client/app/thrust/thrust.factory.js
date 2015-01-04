(function() {
  'use strict';

  angular
    .module('app')
    .factory('Thrust',ThrustFactory);

  function ThrustFactory($rootScope) {

    var ThrustModel = {
      messages: [],
      cmd_line: '',
    };

    var msg_id = 0;

    return {

      initialize: function() {
        var self = this;

        THRUST.remote.listen(function(msg) {
          if (msg.init) {
            ThrustModel.cmd_line = msg.init.cmd_line;
          } else if (msg.entry) {
            self.add(msg.entry);
          }
          $rootScope.$apply();
        });

        THRUST.remote.send({ message: 'ready' });

      },

      add: function(msg) {
        if (msg) {
          msg.id = msg_id = msg_id + 1;
          ThrustModel.messages.push(msg);
        }
      },

      get: function() {
        return ThrustModel;
      },

      messages: function() {
        return ThrustModel.messages;
      },

    };
  }

})();
