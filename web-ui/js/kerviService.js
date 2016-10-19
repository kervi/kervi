angular.module('KerviWebApp').service('KerviService', ['$q', '$rootScope', function($q, $rootScope) {
	console.log("KerviService starting");
	var self=this;
	self.isConnected=false;
	self.sensorsReady=false;
	self.controllersReady=false;
	self.kervi=null;
	
	this.onHartbeat= function(scope, callback) {
		var handler = $rootScope.$on('heartbeat-kerviservice-event', callback);
		scope.$on('$destroy', handler);
	}
	
	this.onSensorValue= function(scope, callback) {
		var handler = $rootScope.$on('sensorvalue-kerviservice-event', callback);
		scope.$on('$destroy', handler);
	}
	
	this.onConnect= function(scope, callback) {
		var handler = $rootScope.$on('connect-kerviservice-event', callback);
		scope.$on('$destroy', handler);
	}
	
	this.onDisconnect= function(scope, callback) {
		var handler = $rootScope.$on('disconnect-kerviservice-event', callback);
		scope.$on('$destroy', handler);
	}
	
	this.onSensorsReady= function(scope, callback) {
		if (!self.sensorsReady){
			var handler = $rootScope.$on('sensorsReady-kerviservice-event', callback);
			scope.$on('$destroy', handler);
		} else {
			callback.call(scope);
		}
	}
	
	this.onControllersReady= function(scope, callback) {
		var handler = $rootScope.$on('controllersReady-kerviservice-event', callback);
		scope.$on('$destroy', handler);
	}

	this.onButtonStateChange=function(scope,callback){
		var handler = $rootScope.$on('controller-button-event', callback);
		scope.$on('$destroy', handler);
	}

    this.notifyConnect= function() {
		$rootScope.$emit('connect-kerviservice-event');
	}
	
	this.notifyDisconnect= function() {
		$rootScope.$emit('disconnect-kerviservice-event');
	}
	
	this.notifySensorValue= function(value) {
		$rootScope.$emit('sensorvalue-kerviservice-event',value);
	}
	
	this.notifyHeartbeat= function() {
		$rootScope.$emit('heartbeat-kerviservice-event');
	}
	
	this.notifySensorsReady= function() {
		$rootScope.$emit('sensorsReady-kerviservice-event');
	}
	
	this.notifyControlersReady= function() {
		$rootScope.$emit('controllersReady-kerviservice-event');
	}

	this.notifyButtonStateChange= function() {
		$rootScope.$emit('controllersbutton-event');
	}

	this.getHost=function(){
		 return "ws://"+window.location.hostname+":9000";
	}
	this.Connect=function(){
		if (self.kervi)
		{
			console.log("kervi service is connected, exit");
			if (self.isConnected){
				self.notifyConnect();
			}
			return;
		}
		self.kervi=new Kervi({
			
			address:self.getHost(),
			autoConnect:true,
			onHeartbeat:function(){
				self.notifyHeartbeat();
			},
		
			onControllersReady:function(){
				self.notifyControlersReady()
				self.safeApply($rootScope);
			},
			onSensorsReady:function(){
				self.sensorsReady=true;
				self.notifySensorsReady();
				self.safeApply($rootScope);
				
			},
			onOpen:function(){
				$rootScope.application=self.kervi.application;
				$rootScope.currentDashboard=$rootScope.application.dashboards[0];
				self.isConnected=true;
				self.notifyConnect();
			},
		
			onClose:function(){
				self.isConnected=false;
				self.notifyDisconnect();
				
			},
			onSensorReading:function(){
				self.safeApply($rootScope);
				self.notifySensorValue(this);
			},
			onButtonStateChange:function(){
				self.safeApply($rootScope);
			},
			
			onAxisChange:function(){
				self.safeApply($rootScope);
			}
		});
		console.log("self.rs init done");
	}
		
	this.getSensors = function(dashboard) {
		if (self.kervi && !dashboard)
			return self.kervi.sensors;
		else if (self.kervi && location){
			var result={}
			for (var sensorType in self.kervi.sensors){
				var subResult=[];
				for (var sensoridx in self.kervi.sensors[sensorType]){
					var sensor=self.kervi.sensors[sensorType][sensoridx];
					if (sensor.dashboards.indexOf(dashboard)>=0)
						subResult.push(sensor);
				}
				if (subResult.length>0)
					result[sensorType]=subResult
			}
			return result;
		} else{
			console.log("gs rs is null");
			return null;
		}
	}
	
	this.getSensorTypes = function() {
		if (self.kervi)
			return self.kervi.sensorTypes;
		else 
			return null;
	}
	
	this.getControllers = function(dashboard) {
		if (self.kervi && !location)
			return self.kervi.controllers;
		else if (self.kervi && location){
			var result={}
			for (var controllerType in self.kervi.controllers){
				var subResult=[];
				for (var controlleridx in self.kervi.controllers[controllerType]){
					var controller=self.kervi.controllers[controllerType][controlleridx];
					if (controller.dashboards.indexOf(dashboard)>=0)
						subResult.push(controller);
				}
				if (subResult.length>0)
					result[controllerType]=subResult
			}
			return result;
		} else
			return null;
    }
	
	this.getControllerTypes = function() {
		if (self.kervi)
			return self.kervi.controllerTypes;
		else
			return null;
    }
	
	this.sendCommand=function(command,callback){
		self.kervi.sendCommand(command,callback);
	}

	this.sendQuery= function(args){
		self.kervi.sendQuery.apply(self.kervi,arguments);
	}

	this.safeApply=function ($scope, fn) {
		var phase = $scope.$root.$$phase;
		if (phase == '$apply' || phase == '$digest') {
			if (fn && typeof fn === 'function') {
				fn();
			}
		} else {
			$scope.$apply(fn);
		}
	}
}]);