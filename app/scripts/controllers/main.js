'use strict';

angular.module('myApp')
  .controller('MainCtrl', function ($scope, Restangular) {
    $scope.posts = Restangular.all("posts").getList();
  });
