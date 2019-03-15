'use strict';

var policyList = angular.module('policyList', ['ui.bootstrap']);

policyList.controller('policyListController', ['$http','$scope', '$rootScope', '$location', '$uibModal', 'config','policyListService',
    function ($http, $scope, $rootScope, $location, $uibModal, config, policyListService) {
        
        $http.get('policies/policies.json',config).then(function (response) {
                console.log(JSON.stringify(response));
                $scope.policies = response.data;
        });
        

        $scope.viewDetails = function(id){
            policyListService.viewDetails(id).then(function (success) {
                console.log(JSON.stringify(success.data));
            },
            function (error) {
                alert('Error in details page');
            }); 
        }
    }]);

