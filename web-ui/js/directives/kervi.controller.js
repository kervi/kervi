(function() {
  var app = angular.module('KerviWebApp');
  app.directive('kerviControllerDirective', function () {
    var controller = ['$scope','KerviService','$element', function ($scope,KerviService,$element) {
		var self=this;
		console.log("kerviControllerDirective controller ready",$scope);
      }]
      
    return {
			restrict: 'EA', 
			scope: {
				kervictrl: '=',
				ctrllocation: '='
			},
			controller: controller,
			controllerAs:"ctrl",
			templateUrl: "templates/controllerDirective.html?v=1",
			link:function($scope, $element, $attrs,ctrl){
				
				$scope.boardType=$attrs.boardtype;
		}	
		};
  });
}());