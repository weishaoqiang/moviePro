(function(angular) {
    // 'use strict';
    angular.module('moviewcat.detail',['ngRoute'])
    .config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
        $locationProvider.hashPrefix('');
        $routeProvider.when('/details',{
            templateUrl:'./movie_detail/view.html',
            controller:'detailController'
        })
    }])
    .controller('detailController',['#scope',function($scope){

    }])
}(angular));
