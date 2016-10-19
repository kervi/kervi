angular.module('RoboSysWebApp')
	.controller('RovCtrl', ['$scope','$rootScope', '$http','RoboSysService', function($scope,$rootScope, $http,RoboSysService){
		console.log("Rov Controller reporting for duty.");
		var self=this;
		
		if (!RoboSysService.isConnected){
			window.location="#/connect";
		}
		
		RoboSysService.onDisconnect($scope, function() {
			// Handle notification
			console.log("rovCtrl disconnect");
			window.location="#/connect";
		});
		
	}]);