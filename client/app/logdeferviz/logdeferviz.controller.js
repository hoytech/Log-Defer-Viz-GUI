(function() {
  'use strict';

  angular
    .module('app')
    .controller('LogDeferViz',LogDeferVizController);

  function LogDeferVizController(Thrust,$scope) {
    var self = this;

    angular.extend(self, {model: Thrust.get()});

    $scope.$on('new-msg', function() {
      $scope.$apply(function() {
        self.model.messages.push(Thrust.get(self.model.messages.length - 1));
      });
    });

  }

})();
