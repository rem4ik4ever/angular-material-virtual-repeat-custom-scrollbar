angular.module('app')
.directive('virtualPerfectScroll', function ($compile, $timeout) {
  return {
    restrict: 'A',
    replace: false, 
    compile: function compile(element, attrs) {
        element.removeAttr("virtual-perfect-scroll"); 
        element.removeAttr("data-virtual-perfect-scroll"); 
      return {
        pre: function preLink(scope, iElement, iAttrs, controller) { },
        post: function postLink(scope, iElement, iAttrs, controller) {  
            var count = 0;
            var stopWatch = scope.$watch(
                function () { return iElement.find('.md-virtual-repeat-scroller'); },
                function (newValue, oldValue) {
                if (newValue !== oldValue) {
                    var scroller = iElement.find('.md-virtual-repeat-scroller');
                    
                    var ps = new PerfectScrollbar(scroller[0]);
                    stopWatch();
                }
            });
        }
      };
    }
  };
});