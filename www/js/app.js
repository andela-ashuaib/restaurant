// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('fastFood', ['ionic','uiGmapgoogle-maps'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/home/index');
  $stateProvider
  .state('home', {
    abstract:true,
    url: '/home',
    templateUrl: '/views/home.html'
  })
  .state('home.index', {
    url: '/index',
    views:
    {
      "index":{
        templateUrl: '/views/index.html',
        controller: 'branchCtrl'
      }

    }
  })
  .state('home.profile', {
    url: '/profile',
     views:
    {
      "index":{
        templateUrl: '/views/profile.html'
      }

    }
  })
  .state('home.history', {
    url: '/history',
     views:
    {
      "index":{
        templateUrl: '/views/history.html'
      }

    }
  })
   .state('home.branch', {
    url: '/branch/:id',
     views:
    {
      "index":{
        templateUrl: '/views/branch.html',
        controller: 'branchitemCtrl'
      }

    }
  })
});