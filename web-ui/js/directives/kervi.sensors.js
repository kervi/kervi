 (function() {
  var app = angular.module('KerviWebApp');
  app.directive('sensorsDirective', function () {
    var controller = ['$scope','KerviService','$element','$rootScope', function ($scope,KerviService,$element,$rootScope) {
        this.sensors=null;  
		this.currentChartSensor=null;
		this.currentChartSensorType=null;
		this.chart=null;
		var self=this;

		
		$scope.showCharts=function($event){
			var h=$(window).height();
			$(".modal-body","#sensorChartModal").height(h-200);
			$("#sensorChartModal").modal("show");
			$event.stopPropagation();
		}
		
		if (KerviService.isConnected){
				self.sensors = KerviService.getSensors($rootScope.currentLocation);
				self.sensorTypes=KerviService.getSensorTypes();
		}
		
		KerviService.onSensorsReady($scope, function() {
			self.sensors = KerviService.getSensors($rootScope.currentLocation);
			self.sensorTypes=KerviService.getSensorTypes();
		});

		KerviService.onDisconnect($scope, function() {
			self.sensors =null;
			self.sensorTypes=null;
		});
		
		
	  }]
  return {
		restrict: 'EA',
		scope: {
			sensors:"@"
		},
		controller: controller,
		controllerAs:"ctrl",
		//templateUrl: "templates/sensorsDirective_7.html",
		template:'<div ng-include="contentUrl"></div>',
		link:function($scope, $element, $attrs,ctrl){
			$scope.contentUrl = 'templates/sensors' + $attrs.ver + 'Directive.html?v=2';
			

			
		}
      };
  });
}());