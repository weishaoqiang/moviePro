(function(angular) {
    // 'use strict';
    angular.module('moviecat.comingSoon',['ngRoute'])
    .config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
        $locationProvider.hashPrefix('');
        $routeProvider.when('/coming_soon',{
            templateUrl:'./coming_soon/view.html',
            controller:'comingSoonController'
        })
    }])
    .controller('comingSoonController',['$scope',function($scope){
        
    }])
})(angular);
