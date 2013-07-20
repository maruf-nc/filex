'use strict';

angular.module('ngApp')
  .controller('ListCtrl', ['$scope', 'recipes',
    function ($scope, recipes) {
      $scope.recipes = recipes;

    }]);
