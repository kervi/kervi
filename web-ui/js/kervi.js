var Kervi=function(options){
	console.log("Kervi init");
	this.options={
		address:null,
		onConnect:null,
		onControllersReady:null,
		onSensorsReady:null,
		onHeartbeat:null,
		onClose:null,
		onSensorReading:null,
		onButtonStateChange:null,
		onAxisValueChange:null,
		onPointOfInterestChange:null,
		autoConnect:true,
	}
	this.isConnected=false;
	this.options=this.extend(this.options,options);
	
	this.connect();
}

Kervi.prototype.extend=function extend(){
    for(var i=1; i<arguments.length; i++)
        for(var key in arguments[i])
            if(arguments[i].hasOwnProperty(key))
                arguments[0][key] = arguments[i][key];
    return arguments[0];
}

Kervi.prototype.addRPCCallback=function(id,callback){
	if (callback)
		this.rpcQueue[id]=callback;
}

Kervi.prototype.handleRPCResponse=function(message){
	var callback=this.rpcQueue[message.id];
	if (callback){
		delete this.rpcQueue[message.id];
		callback.call(message.response,message.response);
	}
}

Kervi.prototype.handleEvent=function(message){
	//console.log("he",message);
	var eventName=message.event;
	var id=message.id;
	
	var eventPath=eventName;
	if (id){
		eventPath+="/"+id;
	}
	
	var value=null;
	if(message.args && message.args.length){
		value=message.args[0];
	}
	
	for(var n=0;(n<this.eventHandlers.length);n++)
	{
		var h=this.eventHandlers[n];
		if (h.eventName==eventPath)
			h.callback.call(value,id,value);
	}
}

Kervi.prototype.handleCommand=function(message){
	console.log("cmd",this,message);
	var command=message.command
	
	var args=null;
	if(message.args && message.args.length){
		args=message.args[0];
	}
	
	for(var n=0;(n<this.commandHandlers.length);n++)
	{
		var c=this.commandHandlers[n];
		if (c.command==command)
			c.callback.call(this,args);
	}
}

Kervi.prototype.connect=function(){
	if (this.isConnected){
		console.log("Kervi is connected");
		return
	}
	this.queryHandlers=[];
	this.commandHandlers=[];
	this.eventHandlers=[];
	this.rpcQueue={};
	this.ready=false;
	this.messageId=0;
	this.sensors={};
	this.controllers={};
	this.sensorTypes=[];
	this.controllerTypes=[];
	this.pointOfInterests=[];
	this.application=null;
	
	this.websocket = new WebSocket(this.options.address);
    var self=this;
	this.websocket.onopen = function(evt) { 
		self.onOpen.call(self);
	};
    
	this.websocket.onclose = function(evt) { 
		self.onClose(evt) 
	};
	
    this.websocket.onmessage = function(evt) { 
		self.onMessage(evt) 
	};
    
	this.websocket.onerror = function(evt) {
		self.onError(evt) 
	};
}

Kervi.prototype.updateControllers=function(message){
	if (Array.isArray(message)){
		for (var i=0;(i<message.length);i++){
			this.updateControllers(message[i]);
		}
	} else {
		var controller=message;
		console.log("c",controller);
		if (controller){
			var ctype=controller.type;
			if (this.controllers[ctype])
				this.controllers[ctype].push(controller);
			else{
				this.controllers[ctype]=[controller];
				this.controllerTypes.push(ctype);
			}
		}
	};
}

Kervi.prototype.updateSensors=function(message){
	if (Array.isArray(message)){
		for (var i=0;(i<message.length);i++){
			this.updateSensors(message[i]);
		}	
	} else {
		var sensor=message;
		var stype=sensor.type;
		if (this.sensors[stype])
			this.sensors[stype].push(sensor);
		else{
			this.sensors[stype]=[sensor];
			this.sensorTypes.push(stype);
		}
	}
}

Kervi.prototype.onOpen=function(evt){
	console.log("Kervi on open",this,evt);
	
	var self=this
	this.isConnected=true;
		
	this.addEventHandler("NewSensorReading","",function(){
		if (this.sensor!="AliveSensor"){
			//console.log("ns",this,self.sensors,self.sensorTypes,self.sensorTypes.length);
			
			for(var sid in self.sensors){
				
				for(var n=0;(n<self.sensors[sid].length);n++)
				{
					var sensor=self.sensors[sid][n];
					
					if (sensor.id==this.sensor){
						sensor.value=this.value;
						sensor.sparkline.push(this.value);
						if (sensor.sparkline.length>10)
							sensor.sparkline.shift();
						if (self.options.onSensorReading)
							self.options.onSensorReading.call(sensor,sensor);
					}
				}
			}
		}
		else if (self.options.onHeartbeat)
			self.options.onHeartbeat.call();
	});

	this.addEventHandler("pointOfInterestChange","",function(){
		//console.log("poi change",this);
		if (this.action=="add"){
			self.pointOfInterests.push(this.pointOfInterest)
		} else if (this.action=="update"){
			for (var i=0;(self.pointOfInterests.length);i++){
				var poi=self.pointOfInterests[i];
				if (poi.id==this.pointOfInterest.id){
					self.pointOfInterests[i]=this.pointOfInterest;
					break;			
				}
			}
		} else if (this.action=="delete"){
			for (var i=0;(self.pointOfInterests.length);i++){
				var poi=self.pointOfInterests[i];
				if (poi.id==this.pointOfInterest.id){
					self.pointOfInterests.splice(i,1)
					break;			
				}
			}
		} else if (this.action=="clear"){
			for (var i=0;(self.pointOfInterests.length);i++){
				var poi=self.pointOfInterests[i];
				if (poi.cameraId==this.cameraId && poi.visionId==this.visionId){
					self.pointOfInterests.splice(i,1)
				}
			}
		}
		
		if (self.options.onPointOfInterestChange)
			self.options.onPointOfInterestChange.call(this);
	});
	
	var appInfoDeferred = new $.Deferred();
	var controllerDeferred = new $.Deferred();
	var sensorDeferred = new $.Deferred();
	

	this.sendQuery("GetApplicationInfo",function(message){
		console.log("appinfo",message);
		self.application=message;
		appInfoDeferred.resolve();
	});

	this.sendQuery("getControllerInfo",null,function(message){
		console.log("controllerinfo response",message);
		
		self.updateControllers(message);
		
		self.addEventHandler("controllerButtonStateChange","",function(id,value){
			for(var i=0;(i<self.controllerTypes.length);i++){
				var cid=self.controllerTypes[i];
				for(var n=0;(n<self.controllers[cid].length);n++)
				{
					var controller=self.controllers[cid][n];
					for( var l=0;(l<controller.buttons.length);l++){
						var button=controller.buttons[l];
						if (button.id==this.button){
							button.state=this.state;
						}
					}
				}
			}
			if (self.options.onButtonStateChange)
				self.options.onButtonStateChange.call(this);
		});

		self.addEventHandler("changeControllerAxisValue","",function(id,value){
			for(var i=0;(i<self.controllerTypes.length);i++){
				var cid=self.controllerTypes[i];
				for(var n=0;(n<self.controllers[cid].length);n++)
				{
					var controller=self.controllers[cid][n];
					for( var l=0;(l<controller.axes.length);l++){
						var axis=controller.axes[l];
						if (axis.id==this.axis){
							axis.value=this.value;
						}
					}
				}
			}
			if (self.options.onAxisChange)
				self.options.onAxisChange.call(this);
		});


		controllerDeferred.resolve();
	});
		
	this.sendQuery("getSensorInfo",function(message){
		console.log("sensorinfo response",message);
		self.updateSensors(message);
		console.log("s",self.sensors);
		sensorDeferred.resolve();
	});
	
	$.when(appInfoDeferred,sensorDeferred,controllerDeferred).then(function(){
		if (self.options.onOpen)
			self.options.onOpen.call(evt);
		
		if (self.options.onControllersReady)
			self.options.onControllersReady.call(self);
		
		if (self.options.onSensorsReady)
			self.options.onSensorsReady.call(self);
		
		self.addEventHandler("moduleStarted","",function(id,value){
			console.log("module started");
			self.sendQuery("getSensorInfo",function(message){
				console.log("sensorinfo response",message);
				self.sensors={};
				self.updateSensors(message);
				//console.log("sensors",self.sensors);
				if (self.options.onSensorsReady)
					self.options.onSensorsReady.call(self);
			});

			self.sendQuery("getControllerInfo",null,function(message){
				console.log("controller info response",message);
				self.controllers={};
				self.updateControllers(message);
				if (self.options.onControllersReady)
					self.options.onControllersReady.call(self);
			});
		});

		self.addEventHandler("moduleStopped","",function(id,value){
			console.log("module stopped");
			setTimeout(function(){
				self.sendQuery("getSensorInfo",function(message){
					console.log("sensorinfo response",message);
					self.sensors={};
					self.updateSensors(message);
					if (self.options.onSensorsReady)
						self.options.onSensorsReady.call(self);
				});

				self.sendQuery("getControllerInfo",null,function(message){
					console.log("controller info response",message);
					self.controllers={};
					self.updateControllers(message);
					if (self.options.onControllersReady)
						self.options.onControllersReady.call(self);
				});
			},3000);
		})
		
	});


	
	console.log("Kervi ready")
}

Kervi.prototype.onClose=function(evt){
	console.log("Kervi on close",evt);
	this.isConnected=false;
	if (this.options.onClose)
		this.options.onClose.call(evt);
	
	if (this.options.autoConnect){
		setTimeout(1000,this.connect());
	}
}

Kervi.prototype.onMessage=function(evt){
	var message=JSON.parse(evt.data);
	if (message.messageType=="response")
		this.handleRPCResponse(message);
	else if (message.messageType=="event")
		this.handleEvent(message);
	else if (message.messageType=="command")
		this.handleCommand(message);
	else
		console.log("Kervi message unknown",this.rpcQueue,evt);
}

Kervi.prototype.onError=function(evt){
	console.log("Kervi on error",evt);
}

Kervi.prototype.addCommandHandler=function (command,callback){
	this.commandHandlers.push({command:command,callback:callback});
	var cmd={id:this.messageId++,"messageType":"registerCommandHandler","command":command};
	this.websocket.send(JSON.stringify(cmd));
};

Kervi.prototype.addQueryHandler=function(query,callback){
	this.queryHandlers.push({query:query,callback:callback});
	var cmd={id:this.messageId++,"messageType":"registerQueryHandler","query":query};
	this.websocket.send(JSON.stringify(cmd));
};

Kervi.prototype.addEventHandler=function(eventName,id,callback){
	if (id)
		this.eventHandlers.push({"eventName":eventName+"/"+id,callback:callback});
	else
		this.eventHandlers.push({"eventName":eventName,callback:callback});
	var cmd={id:this.messageId++,"messageType":"registerEventHandler","event":eventName,"eventId":id};
	console.log("add event handler",cmd);
	this.websocket.send(JSON.stringify(cmd));
};

Kervi.prototype.sendCommand=function(command,callback){
	console.log("sec",arguments);
	var args=[];
	if (arguments.length>1){
		var argOffset=1;
		if ( callback && callback instanceof Function )
			argOffset+=1;
		for (var i=argOffset;(i<arguments.length);i++){
			args.push(arguments[i]);
		}
	}
	var cmd={id:this.messageId++,"messageType":"command","command":command,"args":args};
	if (callback && callback instanceof Function)
		this.addRPCCallback(cmd.id,callback);
	console.log("sendCommand",this,cmd);
	this.websocket.send(JSON.stringify(cmd));
};

Kervi.prototype.sendQuery=function(query){
	var args=[];
	var callback=null;

	for (var i=1;(i<arguments.length);i++){
		if (arguments[i] instanceof Function )
			callback=arguments[i];
		else
			args.push(arguments[i]);
	}
	
	var cmd={id:this.messageId++,"messageType":"query","query":query,"args":args};
	this.addRPCCallback(cmd.id,callback);
	console.log("sendQuery",this,cmd);
	this.websocket.send(JSON.stringify(cmd));
};

Kervi.prototype.triggerEvent=function(eventName,id){
	var e={id:this.messageId++,"messageType":"event","event":eventName,"args":arguments};
	this.websocket.send(JSON.stringify(e));
};