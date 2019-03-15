'use strict';

var eInsureApp = angular.module('eInsureApp',['ngRoute','ui.bootstrap','ngCookies','angularUtils.directives.dirPagination','menuList']);

eInsureApp.controller('insureController', function insureController($scope){

    $scope.name='HCL Insurer';

});
