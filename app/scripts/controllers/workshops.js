'use strict';

app.controller('WorkshopsCtrl', function ($scope) {
    $scope.workshops = [];
    $scope.workshop = { title: '', description: '' };
 
    $scope.submitWorkshop = function () {
      $scope.workshops.push($scope.workshop);
      $scope.workshop = { title: '', description: '' };
    };
 
    $scope.deleteWorkshop = function () {
      $scope.workshops.splice(index, 1);
    };
  });