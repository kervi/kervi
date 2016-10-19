 (function() {

  var app = angular.module('KerviWebApp');

  app.directive('camViewerDirective', function () {
    var controller = ['$scope','KerviService','$element','$rootScope', function ($scope,KerviService,$element,$rootScope) {
        this.currentCam=null;
		this.camTiltTimeout=null;
		var self=this;
        
		var id=$($element).id;
		var $camPad = $("#camPad",$element)
        .xy({
                displayPrevious:false
                , min : -100
                , max : 100
                , fgColor:"#FFFFFF"
                , bgColor:"#ffffff"
                , change : function (value) {
                    if (self.camTiltTimeout)
						clearTimeout(self.camTiltTimeout);
					self.camTiltTimeout=setTimeout(function(){
						KerviService.sendCommand(self.currentCam.axes[0].command,value[0]);
						KerviService.sendCommand(self.currentCam.axes[1].command,value[1]);
					},100); 
                }
            })
        .css({'border':'2px solid #ffffff'});
		var h=$(window).height();
		var w=$(window).width();
		$(".cam-pad-area").css({top: h/2-100, left: w/2-100});
		
		self.setCam=function(){
            	self.kerviControllers = KerviService.getControllers($rootScope.currentLocation);
				if (self.kerviControllers && self.kerviControllers.cam && self.kerviControllers.cam.length>0)
                {
                    self.currentCam=self.kerviControllers.cam[0];
                }
			
            setTimeout(function(){
				
                $scope.$watch('ctrl.currentCam.axes[0].value', function (newValue, oldValue, scope) {
                    if (self.currentCam)
                        $("input[name='x']",".cam-pad-area").val(self.currentCam.axes[0].value).change();
                });

                $scope.$watch('ctrl.currentCam.axes[1].value', function (newValue, oldValue, scope) {
                    if (self.currentCam)
                        $("input[name='y']",".cam-pad-area").val(self.currentCam.axes[1].value).change();
                });
			},0);
        }
        
        if (KerviService.isConnected)
            self.setCam();
        
        KerviService.onControllersReady($scope, function() {
			self.setCam();
		});
      }]
      
      return {
		restrict: 'EA', //Default in 1.3+
		scope: {
			
		},
		controller: controller,
		controllerAs:"ctrl",
		templateUrl: "templates/CamViewerDirective.html",
      };
  });

}());