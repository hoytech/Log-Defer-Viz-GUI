(function() {
  'use strict';

  angular
    .module('app')
    .controller('LogViewPref', LogViewPrefController);

  function LogViewPrefController($scope,LogViewPref) {
    var self = this;
    self.model = {};

    console.log("hello world");

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

    sheet.getRule('.log-msg .log-list tr.level10').prop('display',prefs.error ? 'table-row' : 'none');
    sheet.getRule('.log-msg .log-list tr.level20').prop('display',prefs.warning ? 'table-row' : 'none');
    sheet.getRule('.log-msg .log-list tr.level30').prop('display',prefs.info ? 'table-row' : 'none');
    sheet.getRule('.log-msg .log-list tr.level40').prop('display',prefs.debug ? 'table-row' : 'none');

  }

})();
