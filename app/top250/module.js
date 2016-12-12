(function(angular) {
    // 'use strict';
    angular.module('moviecat.top250',['ngRoute'])
    .config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
        $locationProvider.hashPrefix('');
        $routeProvider.when('/top250',{
            templateUrl:'./in_theaters/view.html',
            controller:'Top250Controller'
        })
    }])
    .controller('Top250Controller',['$scope',function($scope){
        
    }])
})(angular);
