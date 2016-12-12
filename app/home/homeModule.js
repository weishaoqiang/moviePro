(function(angular) {
    // 创建路由，这个是主页的数据参数的路由配置
    angular.module('moviecat.home',['ngRoute'])
        .config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
            // 路由规则
            $locationProvider.hashPrefix('');
            $routeProvider.when('/home_page?',{
                // 模板url
                templateUrl:'./home/view.html',
                // 控制器名称
            })
        }])
}(angular))
