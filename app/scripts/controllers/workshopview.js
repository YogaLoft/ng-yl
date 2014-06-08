'use strict';
 
app.controller('WorkshopViewCtrl',
  function ($scope, $routeParams, Workshop) {
    $scope.workshop = Workshop.find($routeParams.workshopId);
  });