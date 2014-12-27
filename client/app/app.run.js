(function() {
  'use strict';

  angular
    .module('app')
    .run(run);

  function run(Thrust) {
    Thrust.initialize();
  }

})();
