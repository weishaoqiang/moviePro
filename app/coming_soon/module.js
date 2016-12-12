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
    .controller('comingSoonController',['$scope','$http',function($scope,$http){
        $http({
            method:'GET',
            url:'http://api.douban.com/v2/movie/coming_soon'
        }).then(function(response){
            // console.log(response);
            // 暴露数据
            $scope.data = response.data;
            console.log($scope.data);
        },function(response){
            console.log('出错了');

        })
    }])
})(angular);
