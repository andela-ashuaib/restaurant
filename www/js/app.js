// Ionic Starter App


// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('fastFood', ['ionic','uiGmapgoogle-maps','angularPayments'])

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
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
  
  window.Stripe.setPublishableKey('pk_test_f1FMYOZEMy5GE3PaqxYZqcCC');
  $urlRouterProvider.otherwise('/home/index');
  $stateProvider
  .state('home', {
    abstract:true,
    controller:'mainCtrl',
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
  .state('home.order', {
    url: '/order',
    views:
    {
      "index":{
        templateUrl: '/views/order.html',
        controller: 'orderCtrl'

      }

    }
  })
  .state('home.payment', {
    url: '/payment',
    views:
    {
      "index":{
        templateUrl: '/views/payment.html',
        controller: 'paymentCtrl'

      }

    }
  })
  .state('home.profile', {
    url: '/profile',
     views:
    {
      "details":{
        templateUrl: '/views/profile.html',
        controller: 'profileCtrl'
      }

    }
  })
  .state('home.history', {
    url: '/history',
     views:
    {
      "order-history":{
        templateUrl: '/views/history.html',
        controller: 'historyCtrl'
      }

    }
  })
    .state('home.transdetails', {
    url: '/history/:transId',
     views:
    {
      "order-history":{
        templateUrl: '/views/transaction.html',
        controller: 'transCtrl'
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
}]);