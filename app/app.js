(function (angular) {
    // "use strict";
    // start your ride
    angular.module('moviecat',[
        'moviecat.home',
        'moviewcat.detail',
        'moviecat.movieList',
        'moviecat.autoActive',
        'moviecat.jsonp'

    ])
    .controller('searchController',['$scope','$location','JSONPsrv',function($scope,$location,JSONPsrv){
            $scope.query = '';
            $scope.search =  function(){
                $location.url('/search?q='+$scope.query);
            }
    }]);
})(angular);
