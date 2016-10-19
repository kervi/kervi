  (function() {

  var app = angular.module('KerviWebApp');

  app.directive('controllerAxisDirective',['KerviService', function (KerviService) {
    
      
      return {
		restrict: 'EA', //Default in 1.3+
		scope: {
			axis:'='
			
		},
		//templateUrl: "templates/CamViewerDirective.html",
		template:'<div class="axis-pad">{{axis.name}}<fieldset> <input  name="x" value="0">  <input name="y"  value="0"></fieldset></div>',
		link:function($scope, $element, $attrs){
			var color="#ffffff";
			if ($attrs.boardtype=="dashboard")
				color="#000000";
			var p=$('fieldset',$element).xy({
				displayPrevious:false
				, min : $scope.axis.minValue
				, max : $scope.axis.maxValue
				, width:$scope.axis.orientation=="vertical" ? 30 : 180
				, height:$scope.axis.orientation=="vertical" ? 180 : 30
				, fgColor:color
				, bgColor:color
				, change : function (value) {
					if ($scope.axis.orientation=="vertical")
					{	
						KerviService.sendCommand($scope.axis.command,value[1]);
					} else{
						KerviService.sendCommand($scope.axis.command,value[0]);
					}
				}
			})
			.css({'border':'2px solid '+color})
			setTimeout(function(){
				
				if ($scope.axis.orientation=="vertical")
				{
					$("input[name='y']",$element).val($scope.axis.value).change();
					$("input[name='x']",$element).hide();

					$attrs.$observe("value", function (newValue) {
						$("input[name='y']",$element).val(newValue).change();
					});
				} else{
					$("input[name='x']",$element).val($scope.axis.value).change();
					$("input[name='y']",$element).hide();

					$attrs.$observe("value", function (newValue) {
						$("input[name='x']",$element).val(newValue).change();
					});
				}
			},0);
		}
      };
  }]);

}());