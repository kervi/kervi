angular.module('KerviWebApp')
	.controller('ChartsCtrl',['$scope','$rootScope', '$http','KerviService','$routeParams', function($scope,$rootScope, $http,KerviService,$routeParams) {
		console.log("charts Controller reporting for dutyx.",$routeParams);
		
		$scope.sensors=null;  
		$scope.currentChartSensor=null;
		$scope.currentChartSensorType=null;
		$scope.chart=null;
		var self=this;

		$rootScope.currentPageTitle="Charts";
		$scope.selectChart=function(sensor,sensorType){

		
			if ($scope.chart)
				$scope.chart.destroy();
			$scope.currentChartSensor=sensor;
			$scope.currentChartSensorType=sensorType;
			KerviService.sendQuery("getSensorData",$scope.currentChartSensor.id,function (results) {
				var sensorData=this;
				var chartData=[];
				for (var i=0;(i<sensorData.length);i++){
					var dataItem=sensorData[i]
					chartData.push({x:new Date(dataItem.ts),y:dataItem.value});
				}
			
				var ctx=$("#sensorChartCanvas");
				$scope.chart = new Chart(ctx, {
					type: 'line',
					responsive:false,
					data: {
						datasets: [
							{
								data: chartData,
								fill: false
							},
						]
					},
					options: {
						responsive: true,
						title:{
							display:true,
							text: $scope.currentChartSensorType + "-" + $scope.currentChartSensor.name
						},
						scales: {
							xAxes: [{
								type: "time",
								display: true,
								scaleLabel: {
									display: true,
									labelString: 'Date'
								}
							}],
							yAxes: [{
								display: true,
								scaleLabel: {
									display: true,
									labelString: 'value'
								}
							}]
						}
					}
				});
			})
		};


		if (!KerviService.isConnected){
			var location = window.location.hash.substr(1);
			window.location="#/connect?redirect="+location;
		} else {
			$scope.sensors = KerviService.getSensors();
			$scope.sensorTypes=KerviService.getSensorTypes();
			$scope.selectChart($scope.sensors[$scope.sensorTypes[0]][0],$scope.sensorTypes[0]);
			
		}

		KerviService.onSensorsReady($scope, function() {
			$scope.sensors = KerviService.getSensors();
			$scope.sensorTypes=KerviService.getSensorTypes();
			$scope.selectChart($scope.sensors[$scope.sensorTypes[0]][0],$scope.sensorTypes[0]);
		});

		KerviService.onDisconnect($scope, function() {
			$scope.sensors =null;
			$scope.sensorTypes=null;
		});
		
		$scope.showCharts=function($event){
			var h=$(window).height();
			$(".modal-body","#sensorChartModal").height(h-200);
			$("#sensorChartModal").modal("show");
			$event.stopPropagation();
		}
		
		if (KerviService.isConnected){
				
		}
	
		$("#sensorChartModal").on('shown.bs.tab', function(event){
				console.log("sc",event);
				var sensorId=event.target.dataset.sensorid;
				var sensorType=event.target.dataset.sensortype;
				
				for(var i=0;(i<$scope.sensors[sensorType].length);i++){
						if ($scope.sensors[sensorType][i].id==sensorId)
							$scope.currentChartSensor=$scope.sensors[sensorType][i];
					}
					$scope.currentChartSensorType=sensorType;
					self.showChart();
			});


		
		
	}]);