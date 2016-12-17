(function(angular) {
    // 'use strict';
    angular.module('moviecat.movieList',['ngRoute'])
    .config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
        $locationProvider.hashPrefix('');
        $routeProvider.when('/:movie_list/:page?',{
            templateUrl:'./movie_list/view.html',
            controller:'movieListController'
        })
    }])
    .controller('movieListController',['$scope','$http','$route','$routeParams','JSONPsrv',function($scope,$http,$route,$routeParams,JSONPsrv){
        $scope.pageSize = 5; // 每一页显示5条数据
        $scope.curPages = $routeParams.page || 1; // 从第一页开始
        var startCount = ($scope.curPages - 1) * $scope.pageSize; // 开始的数据
        $scope.loadShow = false;
        JSONPsrv.myJsonp('http://api.douban.com/v2/movie/'+$routeParams.movie_list,
            {
                start: startCount,
                count: $scope.pageSize,
                q:$routeParams.q
            },
            function(data){
                $scope.loadShow = true;
                $scope.totalPages = Math.ceil(data.total/$scope.pageSize);
                $scope.data = data;
                // 因为这里涉及到异步操作，那么angular在执行这个脏检查之后才获得数据，如果不强制再次执行脏检查机制的话，那么数据将不会被渲染懂啊页面上。
                $scope.$apply();
            })
        $scope.changePage = function(current){
            // 这里做了限制，不能够让这个页数超出最大值或者最小值
            if( current <= 0 || current >= ($scope.totalPages-0)+1){
                return;
            }
            $scope.curPages = current;
            $route.updateParams({
                'page':current,
            });
        }
    }])
})(angular);
