﻿'use strict';
app.controller('loginController', ['$scope', '$location', 'authService', function ($scope, $location, authService) {

    $scope.loginData = {
        username: '',
        password: ''
    };

    $scope.message = '';

    $scope.login = function () {
        authService.login($scope.loginData)
            .then(function (response) {
                $location.path = '/orders';
            },
            function (err) {
                $scope.message = err.error_description;
            });
    };
}]);