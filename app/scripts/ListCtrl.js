angular.module("hoerijdiknlApp").controller("ListCtrl", ["$scope", "$firebaseObject", function ($scope, $firebaseObject) {
    var reference = firebase.database().ref();
    
    // Download every account
    $scope.accounts = $firebaseObject(reference.child("accounts"));
}]);