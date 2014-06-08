'use strict';
 
app.factory('Workshop',
  function ($firebase, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL + 'workshops');
    var workshops = $firebase(ref);
    var Workshop = {
      all: workshops,
      create: function (workshop) {
        return workshops.$add(workshop);
      },
      find: function (workshopId) {
        return workshops.$child(workshopId);
      },
      delete: function (workshopId) {
        return workshops.$remove(workshopId);
      }
    };
    return Workshop;
  });