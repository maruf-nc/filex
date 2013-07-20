'use strict';

angular.module('myApp')
  .controller('NewCtrl', function ($scope, $location, Restangular) {
    $scope.save = function () {
      Restangular.all('posts').post($scope.post).then(function (post) {
        $location.path('/');
      });
    }
  });
