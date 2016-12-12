(function(angular) {
    // 'use strict';
    angular.module('moviecat.inTheater',['ngRoute'])
    .config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
        $locationProvider.hashPrefix('');
        $routeProvider.when('/in_theaters',{
            templateUrl:'./in_theaters/view.html',
            controller:'inTheaterController'
        })
    }])
    .controller('inTheaterController',['$scope',function($scope){
        
    }])
})(angular);
