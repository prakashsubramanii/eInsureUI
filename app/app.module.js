'use strict';

var eInsureApp = angular.module('eInsureApp',['ngRoute','ui.bootstrap','ngCookies','angularUtils.directives.dirPagination','menuList','policyList']);

eInsureApp.controller('insureController', function insureController($scope){

    $scope.name='HCL Insurer';

});


eInsureApp.constant('config', {
    url:'http://10.117.189.53:9090'
});
