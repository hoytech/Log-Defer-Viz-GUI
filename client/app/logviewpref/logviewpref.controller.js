(function() {
  'use strict';

  angular
    .module('app')
    .controller('LogViewPref', LogViewPrefController);

  function LogViewPrefController($scope,LogViewPref) {
    var self = this;
    self.model = {};

    var sheet = jss.createStyleSheet({
      '.log-msg .log-list tr.level10': { },
      '.log-msg .log-list tr.level20': { },
      '.log-msg .log-list tr.level30': { },
      '.log-msg .log-list tr.level40': { },
    }, {link: true});
    sheet.attach();

    angular.extend(self.model, LogViewPref.get());
    compilecss(self.model,sheet);

    $scope.$watch(
      function() { return self.model; },
      function(newVal,oldVal) {
        LogViewPref.set(newVal);
        compilecss(newVal,sheet);
      },
      true
    );
  }

  function compilecss(prefs,sheet) {

    sheet.getRule('.log-msg .log-list tr.level10').prop('display',prefs.error ? 'block' : 'none');
    sheet.getRule('.log-msg .log-list tr.level20').prop('display',prefs.warning ? 'block' : 'none');
    sheet.getRule('.log-msg .log-list tr.level30').prop('display',prefs.info ? 'block' : 'none');
    sheet.getRule('.log-msg .log-list tr.level40').prop('display',prefs.debug ? 'block' : 'none');

  }

})();
