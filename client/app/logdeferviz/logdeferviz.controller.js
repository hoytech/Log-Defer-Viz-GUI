(function() {
  'use strict';

  angular
    .module('app')
    .controller('LogDeferViz',LogDeferVizController);

  function LogDeferVizController($scope,Thrust,LogViewPref) {
    var self = this;
    self.model = {};

    angular.extend(self.model, { messages: Thrust.get() });
    angular.extend(self.model, { prefs: LogViewPref.get() });

    $scope.$on('new-msg', function() {
      $scope.$apply(function() {
        self.model.messages.push(Thrust.get(self.model.messages.length - 1));
      });
    });

  }

})();
