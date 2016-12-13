// jsonp服务
(function(angular){
    // 创建一个跨域请求服务
    angular.module('moviecat.jsonp',[])
    .service('JSONPsrv',['$window',function($window){
        var doc = $window.document;
        this.myJsonp = function(url,pramas,callback){
            url += '?';
            // 遍历pramas参数对象
            for( k in pramas ){
                url += k +'='+ pramas[k] +'&';
            }
            // 拼接callback函数
            var cbName = 'wsq_jsonp'+(new Date() - 0);
            url += 'callback='+cbName;
            // url拼接完成之后就可以发送请求
            var script = doc.createElement("script");
            script.src = url;
            doc.body.appendChild(script);

            $window[cbName] = function(data){
                callback(data);
                doc.body.removeChild(script);
                delete $window[cbName];
            }
        }
    }])
})(angular)
