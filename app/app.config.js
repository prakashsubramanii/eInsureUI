'use strict';

angular.
  module('eInsureApp').
  config(['$routeProvider','$locationProvider',
    function config($routeProvider,$locationProvider) {

      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/policies', {
          controller: 'policyListController',
          templateUrl: 'policy-list/policy-list.template.html'
        }).
        when('/analytics', {
          controller: 'insureController',
          templateUrl: 'analytics.html'
        }).
        otherwise('/policies');
    }
  ]);
