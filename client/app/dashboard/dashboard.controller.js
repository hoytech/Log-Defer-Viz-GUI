(function() {
  'use strict';

  angular
    .module('app')
    .controller('Dashboard',DashboardController);

  function DashboardController($route,$scope,Thrust,Preferences) {
    var self = this;
    self.model = {};

    angular.extend(self.model, {
      thrust: Thrust.get(),
      prefs: Preferences.get()
    });

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
      function() { return Preferences.get(); },
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

    $scope.$watch(
      function() { return Preferences.timezone(); },
      function(newVal,oldVal) {
        if (newVal !== oldVal) {
          $route.reload();
        }
      },
      true
    );

  }
})();
