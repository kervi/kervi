// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

export class  KerviSpineBase{

	public isConnected: Boolean = false;
	public doAuthenticate:boolean = false;

	sessionId = null;
	queryHandlers=[];
	commandHandlers=[];
	eventHandlers=[];
	rpcQueue={};
	ready=false;
	messageId=0;
	sensors={};
	controllers={};
	sensorTypes=[];
	controllerTypes=[];
	pointOfInterests=[];
	application=null;
	allowAnonymous = true;
	firstOnOpen = true;

	protected websocket = null;
	
	public options: any=  {
			userName: "anonymous",
			password: null,
			address:null,
			onOpen:null,
			onClose:null,
			onAuthenticate:null,
			onAuthenticateFailed:null,
			onAuthenticateStart:null,
			onLogOff: null,
			autoConnect:true,
			targetScope:null,
			protocol:"ws",
			apiToken:null
	}
	
	constructor(public constructorOptions){
		console.log("Kervi base spine init",this.options,constructorOptions);
		this.options = this.extend(this.options,constructorOptions);
		this.connect();
		var self = this;
		setInterval(
			function(){
				var hangingNodes=[]
				for(let id in self.rpcQueue){
					var query = self.rpcQueue[id]
					if (query["callbackTimeout"]){
						if (Date.now() - query["ts"] > query["timeout"]){
							var callback = query["callbackTimeout"]; 
							hangingNodes.push(id);
							callback.call(self.options.targetScope);
						}
					}
				}
				for(var id of hangingNodes){
					delete self.rpcQueue[id];
				}
			}
		,1)
	}

	protected extend(...p:any[])
	{
		for(var i=1; i<p.length; i++)
			for(var key in p[i])
				if(p[i].hasOwnProperty(key))
					p[0][key] = p[i][key];
		return p[0];
	}

	protected addRPCCallback(id:string, callback, callbackTimeout, timeout)
	{
		if (callback)
			this.rpcQueue[id]={
				"callback":callback,
				"callbackTimeout":callbackTimeout,
				"timeout": timeout,
				"ts":Date.now(),
			 };
	}

	protected handleRPCResponse(message){
		if (message.id in this.rpcQueue){
			var callback = this.rpcQueue[message.id]["callback"];
			if (callback){
				delete this.rpcQueue[message.id];
				callback.call(this.options.targetScope,message.response,message.response);
			}
		}
	}

	protected handleEvent(message){
		//console.log("ev", message)
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
			else if (h.eventName==eventName)
				h.callback.call(value,id,value);
		}
	}

	protected handleCommand(message){
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

	protected connect(){
		
	}

	protected onOpen(evt){
		console.log("Kervi open",this,evt);
		
		var self=this
		this.isConnected=true;
		
		this.eventHandlers = [];
		this.commandHandlers = [];
		this.queryHandlers = [];	
		console.log("Kervi spine ready")
		
	}

	protected onClose(evt){
		console.log("Kervi spine on close",evt);
		this.isConnected=false;
		
		if (this.options.onClose)
			this.options.onClose.call(this.options.targetScope,evt);
		this.firstOnOpen=true;
		if (this.options.autoConnect){
			setTimeout(1000,this.connect());
		}
	}

	public authenticate(userName, password){
		
	}

	public logoff(){
		
	}

	protected onMessage(evt){
		
	}

	protected onError(evt){
		console.log("Kervi on error",evt);
	}

	public addCommandHandler (command:string,callback){
		
	};

	public addQueryHandler(query:string,callback){
		
	};

	public addEventHandler=function(eventName:string,id:string,callback){
		
	};

	public sendCommand(command:string,...p:any[]){
		
	};

	public sendQuery(query,...p:any[]){
		
	};

	public triggerEvent(eventName:string,id:string){
		
	};
}