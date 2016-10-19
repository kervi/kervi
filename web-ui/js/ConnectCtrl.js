angular.module('KerviWebApp')
	.controller('ConnectCtrl', ['$scope', '$http','KerviService','$location','$routeParams','$rootScope', function($scope, $http,KerviService,$location,$routeParams,$rootScope){
		console.log("connect Controller reporting for duty.");
		
		KerviService.onConnect($scope, function() {
			// Handle notification
			console.log("connectCtrl on connect",$routeParams);
			if ($routeParams.redirect)
				window.location="#"+$routeParams.redirect;
			else{
				var dashboardId=Object.keys($rootScope.application.dashboards) [0];
				var dashboard=$rootScope.application.dashboards[dashboardId];
				window.location="#/"+dashboard.type+"/"+dashboardId;
			}
		});
		KerviService.Connect();
	}]);
