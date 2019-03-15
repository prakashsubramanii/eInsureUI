'use strict';

angular.
  module('eInsureApp').
  config(['$routeProvider','$locationProvider',
    function config($routeProvider,$locationProvider) {

      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/policies', {
          controller: 'insureController',
          template: '<menu-list></menu-list>'
        }).
        when('/analytics', {
          controller: 'insureController',
          templateUrl: 'analytics.html'
        }).
        otherwise('/policies');
    }
  ]);
