'use strict';

angular.module('myApp', ['restangular'])
  .config(function ($routeProvider, RestangularProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/myroute', {
        templateUrl: 'views/myroute.html',
        controller: 'MyrouteCtrl'
      })
      .when('/new', {
        templateUrl: 'views/edit.html',
        controller: 'NewCtrl'
      })
      .when('/edit/:postId', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl',
        resolve: {
          post: function (Restangular, $route) {
            return Restangular.one('posts', $route.current.params.postId).get();
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });

    RestangularProvider.setBaseUrl('/api');
    RestangularProvider.setRestangularFields({
      id: '_id'
    });

    /*RestangularProvider.setRequestInterceptor(function (elem, operation, what) {
      if (operation === 'put') {
        elem._id = undefined;
        return elem;
      }
      return elem;
    })*/
  });
