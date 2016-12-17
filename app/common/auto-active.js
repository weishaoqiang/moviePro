!function(angular){
    angular.module('moviecat.autoActive',[])
    .directive('autoActive',['$location',function($location){
        return {
              link:function(scope,element){
                  scope.location = $location;
                  scope.$watch('location.url()', function(newValue) {
                      // console.log(newValue);
                      // a标签中的内容： #/in_theaters
                      // url： /in_theaters
                      var aLink = element.children().attr('href');
                      // console.log(aLink)
                      if(aLink.indexOf(newValue) > -1) {
                          element.parent().children().removeClass('active');
                          element.addClass('active');
                      }
                  });
              }
            }
    }])
}(angular);