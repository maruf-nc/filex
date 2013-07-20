'use strict';

angular.module('myApp')
  .controller('EditCtrl', function ($scope, $location, Restangular, post) {
    var original = post;
    $scope.post = Restangular.copy(original);

    $scope.isClean = function () {
      return angular.equals(original, $scope.post);
    };

    $scope.destroy = function () {
      original.remove().then(function () {
        $location.path('/');
      });
    };

    $scope.save = function () {
      $scope.post.put().then(function () {
        $location.path('/');
      });
    };
  });
