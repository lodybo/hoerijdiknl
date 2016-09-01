angular.module("hoerijdiknlApp").controller("VehiclesCtrl", ["$scope", "$firebaseArray", "$routeParams", function ($scope, $firebaseArray, $routeParams) {
    $scope.state = $routeParams.state;
}]);