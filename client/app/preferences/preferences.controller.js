(function() {
  'use strict';

  angular
    .module('app')
    .controller('Preferences', PreferencesController);

  function PreferencesController($scope,Preferences,angularMomentConfig,$route) {
    var self = this;

    angular.extend(self, {model: Preferences.get()});

    var sheet = createsheet();
    compilecss(sheet,self.model.loglevel);

    $scope.$watch(
      function() { return self.model; },
      function() {
        Preferences.set(self.model);
        angularMomentConfig.timezone = self.model.timezone.TZ;
      },
      true
    );

    $scope.$watch(
      function() { return self.model.loglevel; },
      function() {
        compilecss(sheet,self.model.loglevel);
      },
      true
    );

  }

  function createsheet() {
    var sheet = jss.createStyleSheet({
      '.log-msg .log-list tr.level10': { },
      '.log-msg .log-list tr.level20': { },
      '.log-msg .log-list tr.level30': { },
      '.log-msg .log-list tr.level40': { },
    }, {link: true});

    sheet.attach();

    return sheet;
  }

  function compilecss(sheet,prefs) {

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
