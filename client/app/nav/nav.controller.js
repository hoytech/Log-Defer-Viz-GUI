(function() {
  'use strict';

  angular
    .module('app')
    .controller('Nav', NavController);

  function NavController(Thrust) {
    var self = this;
    self.model = {};
    angular.extend(self.model,{thrust: Thrust.get()});
  }

})();
