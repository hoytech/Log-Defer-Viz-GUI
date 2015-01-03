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

    $scope.$watch(
      function() {
        return Thrust.messages();
      },
      function(newVal,oldVal) {
        if (newVal !== oldVal) {
          self.model.thrust.messages = newVal;
        }
      },
      true
    );

    $scope.$watch(
      function() { return LogViewPref.get(); },
      function(newVal,oldVal) {
        var show_pinned = newVal.show_pinned;
        if (show_pinned) {
          self.model.filter = {pinned: true};
        } else {
          self.model.filter = '';
        }
      },
      true
    );

  }

})();
