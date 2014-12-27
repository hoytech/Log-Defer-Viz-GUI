(function() {
  'use strict';

  angular
    .module('app')
    .config(routes);

  function routes($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'logdeferviz/logdeferviz.view.html',
        controller: 'LogDeferViz',
        controllerAs: 'ldv',
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
