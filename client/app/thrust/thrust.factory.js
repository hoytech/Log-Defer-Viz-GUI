(function() {
  'use strict';

  angular
    .module('app')
    .factory('Thrust',ThrustFactory);

  function ThrustFactory($rootScope) {

    var ThrustModel = {
      messages: [],
      cmd_line: 'lol',
    };

    return {

      initialize: function() {
        var self = this;

        THRUST.remote.listen(function(msg) {
          if (msg.init) {
console.log("INIT");
console.log(msg);
            ThrustModel.cmd_line = msg.init.cmd_line;
          } else if (msg.entry) {
            self.add(msg.entry);
          }
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
