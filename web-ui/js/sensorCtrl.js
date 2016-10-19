 angular.module('KerviWebApp')
	.controller('SensorCtrl', ['$scope','$rootScope', '$http','SensorService', function($scope,$rootScope, $http,SensorService){
		console.log("sensor Controller reporting for duty.");

		var self=this;
		self.heartBeats=1;
		self.sensors=null;
		
		RoboSysService.onHartbeat($scope, function() {
			// Handle notification
			
			$scope.$apply(function() {
				$scope.heartBeats = $scope.heartBeats + 1;
			});
		});
		
		if (!RoboSysService.sensorsReady)
		{
			RoboSysService.onSensorsReady($scope, function() {
				// Handle notification
				console.log("sensorCtrl sensors ready")
				
				$scope.$apply(function() {
					$scope.sensors = RoboSysService.getSensors();
				});
			});
		} else{
			$scope.sensors = RoboSysService.getSensors();
		}
	}]);