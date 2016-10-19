angular.module('KerviWebApp')
	.controller('PageCtrl',['$scope','$rootScope', '$http','KerviService','$routeParams', function($scope,$rootScope, $http,KerviService,$routeParams) {
		console.log("Page Controller reporting for dutyx.",$routeParams);
		var self=this;
		$rootScope.currentLocation=$routeParams.location;

		this.setTitle=function(){
			for (dashboardId in $rootScope.application.dashboards){
				console.log("xx",dashboardId,$rootScope.application);
				if (dashboardId==$rootScope.currentLocation){
					$rootScope.currentPageTitle=$rootScope.application.dashboards[dashboardId].name;
					break;
				
				}
			}
		}

		if (!KerviService.isConnected){
			var location = window.location.hash.substr(1);
			window.location="#/connect?redirect="+location;
		} else {
			this.setTitle();
		}
		
		KerviService.onDisconnect($scope, function() {
			// Handle notification
			console.log("rovCtrl disconnect");
			var location = window.location.hash.substr(1);
			window.location="#/connect?redirect="+location;
		});
		
	}]);