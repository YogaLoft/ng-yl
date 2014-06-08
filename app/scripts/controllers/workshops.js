'use strict';

app.controller('WorkshopsCtrl', function ($scope, $location, Workshop) {
  $scope.workshops = Workshop.all;
  $scope.workshop = { title: '', description: '' };

  $scope.submitWorkshop = function () {
    Workshop.create($scope.workshop).then(function (ref) {
      $location.path('/workshops/' + ref.name());
    });
  };

  $scope.deleteWorkshop = function (workshopId) {
    Workshop.delete(workshopId);
  };
});