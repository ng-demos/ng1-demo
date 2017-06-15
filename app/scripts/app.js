'use strict';

/**
 * @ngdoc overview
 * @name ng1DemoApp
 * @description
 * # ng1DemoApp
 *
 * Main module of the application.
 */
angular
  .module('ng1DemoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('', {
        redirectTo: '/',
      })
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/new', {
        templateUrl: 'views/ng2.html',
        controller: 'Ng2Ctrl',
        controllerAs: 'ng2'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
