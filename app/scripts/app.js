/* global app:true */

'use strict';

var app = angular.module('ngYlApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ]);
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/workshops.html',
        controller: 'WorkshopsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
