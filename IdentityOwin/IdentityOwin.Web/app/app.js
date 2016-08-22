// Set routes and load modules

var app = angular.module('AngularAuthApp', ['ngRoute', 'LocalStorageModule', 'angular-loading-bar']);

app.config(function ($routeProvider) {

    $routeProvider.when("/home", {
        controller: 'homeController',
        templateUrl: '/app/views/home.html'
    });

    $routeProvider.when("/login", {
        controller: 'loginController',
        templateUrl: '/app/views/login.html'
    });

    $routeProvider.when("/signup", {
        controller: 'signupController',
        templateUrl: '/app/views/signup.html'
    });

    $routeProvider.when("/orders", {
        controller: 'ordersController',
        templateUrl: '/app/views/orders.html'
    });

    $routeProvider.otherwise({ redirectTo: "/home" });
});

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);

// interceptor that sends authorization token if any with each http request 
// so we don't need to configure it for each controller
app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});