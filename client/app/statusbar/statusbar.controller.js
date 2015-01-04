(function() {
  'use strict';

  angular
    .module('app')
    .controller('StatusBar', StatusBarController);

  function StatusBarController(Thrust) {
    var self = this;
    self.model = {};
    angular.extend(self.model,{thrust: Thrust.get()});
  }

})();
