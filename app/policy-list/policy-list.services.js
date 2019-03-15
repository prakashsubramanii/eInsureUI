'use strict';

angular.module('policyList').factory('policyListService', ['$http', '$window', '$rootScope',
  function ($http, $window, $rootScope) {

    var service = {};
    
    service.viewDetails = function (policyid) {
      return $http({
        method: 'GET',
        type: 'JSON',
        url: 'policies/'+policyid+'.json'
      });
    }

    
    // service.searchpolicyList = function (petObj) {
    //   var params = {
    //     page: 0,
    //     size: 5
    //   }
    //   return $http({
    //     method: 'POST',
    //     type: 'JSON',
    //     data: petObj,
    //     params: params,
    //     url: 'http://13.234.118.1:9090/PetPeers/api/pets/filter'
    //   });

    // }
    
    return service;
  }]);
