(function(angular) {
    // 'use strict';
    angular.module('moviewcat.detail',['ngRoute'])
    .config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
        $locationProvider.hashPrefix('');
        $routeProvider.when('/details/:id',{  // id是参数，需要带冒号。
            templateUrl:'./movie_detail/view.html',
            controller:'detailController'
        })
    }])
    .controller('detailController',['$scope','$routeParams','JSONPsrv',function($scope,$routeParams,JSONPsrv){
        JSONPsrv.myJsonp(
        'https://api.douban.com/v2/movie/subject/'+ $routeParams.id, {},
        function(data){
            $scope.data = data;
            $scope.$apply(); // 异步请求数据就要重新执行脏检查
        });
    }])
}(angular));
