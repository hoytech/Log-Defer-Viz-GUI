(function() {
  'use strict';

  angular
    .module('app')
    .controller('LogDeferViz',LogDeferVizController);

  function LogDeferVizController($scope,Thrust,LogViewPref) {
    var self = this;
    self.model = {};

    angular.extend(self.model, { thrust: Thrust.get() });
    angular.extend(self.model, { prefs: LogViewPref.get() });

    $scope.$on('new-msg', function() {
      $scope.$apply(function() {
        self.model.thrust.messages = Thrust.messages();
      });
    });

  }

})();
