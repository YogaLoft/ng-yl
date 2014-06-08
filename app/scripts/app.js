/* global app:true */

'use strict';

var app = angular.module('ngYlApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
])
.constant('FIREBASE_URL', 'https://boiling-fire-8923.firebaseio.com/');

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/workshops.html',
      controller: 'WorkshopsCtrl'
    })
    .when('/workshops/:workshopId', {
      templateUrl: 'views/showworkshop.html',
      controller: 'WorkshopViewCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
