'use strict';

angular.module('ngApp')
  .controller('MyControllerCtrl', function ($scope) {
    $scope.blogs = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
