
var ConsoleModule = angular.module('ConsoleModule', ['ngRoute']);

ConsoleModule.config(['$routeProvider', '$locationProvider','$sceDelegateProvider', '$httpProvider',
    function ($routeProvider, $locationProvider, $sceDelegateProvider, $httpProvider) {
    $routeProvider.when('/', {
        templateUrl: '/partials/Byzip.html',
        controller: 'wcontroller',
        controllerAs: 'wcontroller'
    });
}]);

ConsoleModule.controller('wcontroller', ['$scope', '$http', '$routeParams', '$timeout', '$sce',
    function($scope, $http, $routeParams, $timeout, $sce) {

    $scope.somemessage = "Some weather";
    $scope.name1City = "";
    $scope.name1Weather = "";

    $scope.name = function(which) {

        var data = "";
        if(which === 1) {
            data = $scope.name1m;
        } else if(which === 2) {
            data = $scope.name2m;
        } else if(which === 3) {
            data = $scope.name3m;
        } else if(which === 4) {
            data = $scope.name4m;
        } 

        if(data.length === 5) {
            $http({
                method: "GET",
                url: '/api/v1/getWeather?q=' + data
            }).then( function(response) {
                if(which === 1) {
                    $scope.name1City = response.data.city;
                    $scope.name1Weather = response.data.weather;
                } else if(which === 2) {
                    $scope.name2City = response.data.city;
                    $scope.name2Weather = response.data.weather;
                } else if(which === 3) {
                    $scope.name3City = response.data.city;
                    $scope.name3Weather = response.data.weather;
                } else if(which === 4) {
                    $scope.name4City = response.data.city;
                    $scope.name4Weather = response.data.weather;
                } 
            });
        } else {
            if(which === 1) {
                    $scope.name1City = "";
                    $scope.name1Weather = "";
                } else if(which === 2) {
                    $scope.name2City = "";
                    $scope.name2Weather = "";
                } else if(which === 3) {
                    $scope.name3City = "";
                    $scope.name3Weather = "";
                } else if(which === 4) {
                    $scope.name4City = "";
                    $scope.name4Weather = "";
                } 
        }
    };
    
}]);