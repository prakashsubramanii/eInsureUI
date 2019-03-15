'use strict';

var policyList = angular.module('policyList', ['ui.bootstrap']);

policyList.controller('policyListController', ['$http','$scope', '$rootScope', '$location', '$uibModal', 'config','policyListService',
    function ($http, $scope, $rootScope, $location, $uibModal, config, policyListService) {
        
        $http.get(config.url+'einsure/policies/').then(function (response) {
                console.log(JSON.stringify(response));
                $scope.policies = response.data;
        });
        

        // $scope.viewDetails = function(id){
             
        // }


        $scope.open = function(policyObj) {
            $scope.policy = policyObj;

            // policyListService.viewDetails(policyObj.id).then(function (success) {
                // console.log(JSON.stringify(success.data));

                // var policyDetails = success.data;

                var modalInstance =  $uibModal.open({
                    templateUrl: "policy-list/modalContent.html",
                    controller: "ModalContentCtrl",
                    scope: $scope,
                    size: '',
                  });
                  
                  modalInstance.result.then(function(response){
                      $scope.result = `${response} button hitted`;
                  });
      
            // },
            // function (error) {
            //     alert('Error in details page');
            // });            
          };
    }]);


    policyList.controller('ModalContentCtrl', function($scope, $uibModalInstance, policyListService) {
      
        $scope.ok = function(){

              $uibModalInstance.close("Ok");

              alert('User Registered for the policy');
              
            //   petListService.searchPetList(object)
            //   .then(
            //     function (success) {
            //         $scope.pets = success.data.content;
            //         petListService.setPetList($scope.pets);
            //         console.log(JSON.stringify($scope.pets));
            //         window.location.replace('#!/pets');
            //     },
            //     function (error) {
            //         $scope.pets = null;
            //         petListService.setPetList(undefined);
            //         alert('Error searching pet to list');
            //     }); 
        }

        $scope.cancel = function(){
            $uibModalInstance.dismiss();
          } 
        
        
      });
