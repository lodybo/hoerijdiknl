angular.module("hoerijdiknlApp", ["firebase", "ngRoute"])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
        .when("/", {
            templateUrl: "views/ListView.html",
            controller: "ListCtrl"
        })
        .when('/profile/', {
            templateUrl: 'views/ProfileView.html',
            controller: 'ProfileCtrl'
        })
        .otherwise({
            redirectTo: "/"
        });

        // configure html5 to get links working on jsfiddle
        $locationProvider.html5Mode(true);
    });