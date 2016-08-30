angular.module("hoerijdiknlApp").controller("ListCtrl", ["$scope", "$firebaseObject", function ($scope, $firebaseObject) {
    var reference = firebase.database().ref();
    
    // Download every account
    $scope.accounts = $firebaseObject(reference.child("accounts"));
    
    // Download every vehicle
    $scope.vehicles = $firebaseObject(reference.child("vehicles"));
    
    // Download every message
    $scope.messages = $firebaseObject(reference.child("messages"));
    
    // Query
    $scope.query = $firebaseObject(reference.child("accounts").orderByChild("name").equalTo("Lody Borgers"));
}]);