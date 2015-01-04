(function() {
  'use strict';

  angular
    .module('app')
    .controller('LogMsgViz',LogMsgVizController);

  function LogMsgVizController($scope,Thrust,Preferences) {
    var self = this;
    self.model = {};

    $scope.init = function(msg) {
      self.model.msg = msg;
    };

  }

})();
