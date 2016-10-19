app.directive("dashboardDirective", function () {

    var controller = ['$scope','KerviService','$element', function ($scope,KerviSysService,$element) {
        this.heartbeats=0;
        this.heartbeat=[]
		var self=this;
		KerviService.onHartbeat($scope, function() {
			self.heartbeats = self.heartbeats + 1;
            
            $($element).show();
			$($element).fadeOut(750);
		});
      }],

    return {
		restrict: "E",
		scope: {
			data: "@",
			sensorId:"@"
        },
        controller:controller,
        templateUrl:"templates/locationdirective.html",
        link: function(scope, element, attrs, ngModel) {
            
        },
    };
});