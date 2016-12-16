(function (angular) {
    // "use strict";

    // start your ride
    angular.module('moviecat',[
        'moviecat.home',
        // 'moviecat.inTheater',
        // 'moviecat.top250',
        // 'moviecat.comingSoon',
        'moviecat.movieList',
        'moviewcat.detail',
        'moviecat.jsonp'
    ])
    .controller('searchController',['$scope','$location',function($scope,$location){
        
        $scope.search=function(){
            console.log(111);
        }
    }]);
})(angular);
