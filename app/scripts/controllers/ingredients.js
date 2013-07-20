'use strict';

angular.module('ngApp')
  .controller('IngredientsCtrl', [ '$scope', function ($scope) {
    $scope.addIngredient = function () {
      var ingredients = $scope.recipe.ingredients;
      ingredients[ingredients.length] = {};
    };

    $scope.removeIngredient = function (index) {
      $scope.recipe.ingredients.splice(index, 1);
    };
  }]);
