 (function() {

  var app = angular.module('KerviWebApp');

  app.directive('camViewerDirective', function () {
    var controller = ['$scope','KerviService','$element','$rootScope', function ($scope,KerviService,$element,$rootScope) {
        this.currentCam=null;
		this.camTiltTimeout=null;
        this.kerviPOI=null;
		this.scaleX=null;
        this.scaleY=null;
        var self=this;
        
        
        
        this.transformX=function(x){
            if (self.scaleX===null){
                var w=$("#camImage").width();
                self.scaleX= parseFloat(w) / this.currentCam.parameters.width;
                console.log("sx",w,this.currentCam.parameters.width,self.scaleX);
            }
            
            return x * self.scaleX;
        }

        this.transformY=function(y){
            if (self.scaleY===null){
                var h=$("#camImage").height();
                self.scaleY= parseFloat(h) /this.currentCam.parameters.height;
                console.log("sx",h,this.currentCam.parameters.height,self.scaleY);
            }
            return y * self.scaleY;
        }

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
                    self.kerviPOI = KerviService.getPointOfInterests(self.currentCam.id);
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

                $('#video-viewer').height($(window).height());


			},0);
        }
        
        if (KerviService.isConnected)
            self.setCam();
        
        KerviService.onControllersReady($scope, function() {
			self.setCam();
		});

        KerviService.onPointOfInterestChange($scope,function(){
            
            self.kerviPOI = KerviService.getPointOfInterests(self.currentCam.id);
            //console.log("cam poi c",self.kerviPOI);

            var canvas = document.getElementById('camCanvas');
            var context = canvas.getContext('2d');
            canvas.height=self.currentCam.parameters.height;
            canvas.width=self.currentCam.parameters.width;    
            context.clearRect(0, 0, canvas.width, canvas.height);
            for (var i in self.kerviPOI){
                var poi=self.kerviPOI[i];
                context.beginPath();
                context.rect(poi.position[0], poi.position[1],poi.size[0],poi.size[1]);
                context.fillStyle = 'rgba(255, 255, 255, 0.5)';
                context.fill();
                context.lineWidth = 1;
                context.strokeStyle = 'green';
                context.stroke();
            }
        });


        $(window).bind('resize', function(){
            $('#video-viewer').height($(window).height());
            var h=$(window).height();
		    var w=$(window).width();
		    $(".cam-pad-area").css({top: h/2-100, left: w/2-100});
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