(function() {

  var app = angular.module('KerviWebApp');

  app.directive('heartbeatDirective', function () {
    var controller = ['$scope','KerviService','$element', function ($scope,KerviService,$element) {
        this.heartbeats=0;
        this.heartbeat=[];
        this.sensors=null;
        this.sensorTypes=null

		var self=this;
		KerviService.onHartbeat($scope, function() {
			//$scope.$apply(function() {
				self.heartbeats = self.heartbeats + 1;
                //$scope.data+=[1]
			//});
            
            $(".hart",$element).show();
			$(".hart",$element).fadeOut(750);
		});


        if (KerviService.isConnected){
				self.sensors = KerviService.getSensors("cpu");
				self.sensorTypes=KerviService.getSensorTypes();
		}
		
		KerviService.onSensorsReady($scope, function() {
			self.sensors = KerviService.getSensors("cpu");
			self.sensorTypes=KerviService.getSensorTypes();
		});

		KerviService.onDisconnect($scope, function() {
			self.sensors =null;
			self.sensorTypes=null;
		});

        

      }];
        
      return {
          restrict: 'EA', //Default in 1.3+
          scope: {
              data: "@",
          },
          controller: controller,
		  controllerAs:"ctrl",
          //template: template,
          templateUrl:"templates/hartbeatDirectve.html"
        }
      });
}());