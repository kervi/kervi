(function() {

  var app = angular.module('KerviWebApp');

  app.directive('sensorChartDirective',['KerviService', function (KerviService) {
    var controller = ['$scope','KerviService','$element', function ($scope,KerviService,$element) {
        var self=this;
		console.log("sensorChartDirective controller ready",$scope);
      }]
      
      return {
		restrict: 'EA', //Default in 1.3+
		scope: {
			sensor:'='
		},
		template:'<canvas id="sensorChartCanvas" width="400px" height="400px"></canvas> ',
		link:function($scope, $element, $attrs,ctrl){
			var ctx=$("#sensorChartCanvas");
            
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            });
		}
      };
  }]);

}());