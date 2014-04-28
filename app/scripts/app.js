'use strict';

angular
  //standard loading of dependencies for main app module
  .module('angMapDemoApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.router',
    'leaflet-directive'
  ])
  //routing config using angular-ui-router
  //and using multiple views
  .config(function($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to index.html
    $urlRouterProvider.otherwise('/');
    // Now set up the states
    $stateProvider
      .state('main', {
        url: '/',
        views: {
          'map': {
            templateUrl: 'views/map.html',
            controller: 'MapCtrl'
          },
          'jumbo': {
            templateUrl: 'views/jumbo.html'
          }
        }
      })
  });