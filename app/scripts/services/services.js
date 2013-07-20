"use strict";

var services = angular.module('guthub.services', ['ngResource']);

services.factory('Recipe', ['$resource', function($resource) {
  return $resource("/recipe/:id", {id: "@id"});
}]);

services.factory('MultiRecipeLoader', ['Recipe', '$q', function(Recipe, $q) {
  return function() {
    var deffered = $q.defer();
    Recipe.query(function(recipes) {
      deffered.resolve(recipes);
    }, function() {
      deffered.reject('Unable to fetch Recipes');
    });
    return deffered.promise;
  }
}]);

services.factory('RecipeLoader', ['Recipe', '$route', '$q', function(Recipe, $route, $q) {
  return function() {
    var deffered = $q.defer();
    Recipe.get({id: $route.current.params.recipeId}, function(recipe) {
      deffered.resolve(recipe);
    }, function() {
      deffered.reject("Unable to fetch recipe: " + $route.current.params.recipeId);
    });
    return deffered.promise;
  };
}]);