(function() {
  'use strict';

  angular
    .module('app')
    .config(routes);

  function routes($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'dashboard/dashboard.view.html',
        controller: 'Dashboard',
        controllerAs: 'dashboard',
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
