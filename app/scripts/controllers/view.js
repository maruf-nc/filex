'use strict';

angular.module('ngApp')
  .controller('ViewCtrl', ['$scope', '$location', 'recipe',
    function ($scope, $location, recipe) {
      $scope.recipe = recipe;
      $scope.edit = function () {
        $location.path("/edit/" + recipe.id)
      };
    }
  ]);
