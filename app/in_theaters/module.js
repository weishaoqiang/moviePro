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
    .controller('inTheaterController',['$scope','$http',function($scope,$http){
        $http({
            method:'GET',
            url:'http://api.douban.com/v2/movie/in_theaters'
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
