(function() {
  'use strict';

  angular
    .module('app')
    .controller('LogViewPref', LogViewPrefController);

  function LogViewPrefController($scope,LogViewPref,angularMomentConfig,$route) {
    var self = this;

    angular.extend(self, {model: LogViewPref.get()});

    var sheet = jss.createStyleSheet({
      '.log-msg .log-list tr.level10': { },
      '.log-msg .log-list tr.level20': { },
      '.log-msg .log-list tr.level30': { },
      '.log-msg .log-list tr.level40': { },
    }, {link: true});

    sheet.attach();
    compilecss(self.model,sheet);

    $scope.$watch(
      function() { return self.model.loglevel; },
      function() {
        LogViewPref.set(self.model);
        compilecss(self.model.loglevel,sheet);
      },
      true
    );

    $scope.$watch(
      function() { return self.model; },
      function() {
        LogViewPref.set(self.model);
        angularMomentConfig.timezone = self.model.timezone.TZ;
      },
      true
    );
  }

  function compilecss(prefs,sheet) {

    // debug
    sheet
      .getRule('.log-msg .log-list tr.level40')
      .prop('display',prefs.debug ? 'table-row' : 'none');

    // info
    sheet
      .getRule('.log-msg .log-list tr.level30')
      .prop('display',prefs.info ? 'table-row' : 'none');

    // warning
    sheet
      .getRule('.log-msg .log-list tr.level20')
      .prop('display',prefs.warning ? 'table-row' : 'none');

    // error
    sheet
      .getRule('.log-msg .log-list tr.level10')
      .prop('display',prefs.error ? 'table-row' : 'none');

  }

})();
