angular.module("hoerijdiknl").controller("ListCtrl", function ($scope, $firebaseObject) {
    var reference = $firebaseObject.database().ref();
    
    // Download every account
    $scope.accounts = $firebaseObject(reference.child("accounts"));
});