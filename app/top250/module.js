(function(angular) {
    // 'use strict';
    angular.module('moviecat.top250',['ngRoute'])
    .config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
        $locationProvider.hashPrefix('');
        $routeProvider.when('/top250',{
            templateUrl:'./top250/view.html',
            controller:'Top250Controller'
        })
    }])
    .controller('Top250Controller',['$scope','$http',function($scope,$http){
        $http({
            method:'GET',
            url:'http://api.douban.com/v2/movie/top250'
        }).then(function(response){
            // console.log(response);
            // 暴露数据
            $scope.data = response.data;
            // console.log($scope.data);
        },function(response){
            // console.log(456);

        })
    }])
})(angular);
