// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
import {KerviSpineBase} from "./ikervi-spine";
declare var Stomp:any;
export class  KerviIO extends KerviSpineBase {
	private socketSession:null;
	private exchange = "/exchange/app_1";
	
	constructor(public constructorOptions){
		super(constructorOptions);
		console.log("Kervi io spine init x", this.options,constructorOptions);
		
	}

	private onMQError(frame){
		console.log("MQ error", frame);
	}

	
	protected connect(){
		if (this.isConnected){
			console.log("Kervi is connected");
			return
		}
		var self=this;
		//var mqUrl= this.options.protocol + "://" + this.options.address
		var mqUrl= "wss://mq.kervi.io:15673/ws"
		this.websocket = Stomp.client(mqUrl);
		this.websocket.heartbeat.incoming = 0;
		this.websocket.connect(
			self.options.apiToken.api_token, 
			"ui", 
			function (frame){
				console.log("MQ connect", frame, this.websocket, this);
				self.socketSession = frame.headers.session;
				self.websocket.subscribe(self.exchange, function(message) {
					console.log("mq ", message);
					if (message.headers["topic"])
						message.headers["topic"] = message.headers["topic"].replace(new RegExp("\\c","g"),":");
					if (message.command=="CONNECTED"){

					}
					else if (message.headers["topic"] == "ping")
						self.onPing(message);
					else
						self.onMessage(message);
				}, { });
			},
			self.onMQError, self.options.apiToken.api_channel);
	}

	
	onPing(message){
		console.log("onping", this.options.appId, message);
		var self = this;
		if (!this.isConnected && message.headers["connection_id"]== self.options.apiToken.app_id){
			this.onOpen(message);
			this.websocket.send(self.exchange, { topic:"session:new", router_id:message.headers["router_id"], session_id:this.socketSession}, "{}")	
			
		}
		
	}

	authenticate(userName, password){
		this.options.userName = userName;
		this.options.password = password;
		if (this.options.onAuthenticateStart)
			this.options.onAuthenticateStart.call(this.options.targetScope);
		var cmd={id:this.messageId++,"messageType":"authenticate","userName":this.options.userName, "password": this.options.password};
		this.websocket.send(JSON.stringify(cmd));
	}

	logoff(){
		//this.options.userName = this.allowAnonymous ? "anonymous" : null;
		//this.options.password = null;

		var cmd={id:this.messageId++,"messageType":"logoff", "session": this.sessionId};
		this.sessionId = null;
		this.websocket.send(JSON.stringify(cmd));
	}

	onMessage(evt){
		console.log("on m",evt);
		var message=JSON.parse(evt.body);
		var self = this;
		var topic = evt.headers["topic"];

		if (topic=="authenticate"){
			console.log("authenticate");
			this.doAuthenticate = true;
			if (this.options.userName)
				this.authenticate(this.options.userName, this.options.password)
			else
				this.options.onAuthenticate.call(this.options.targetScope,evt);
		}
		else if (topic=="authentication_failed"){
			console.log("authentication failed", this.options.userName);
			if (this.options.userName == "anonymous") {
				this.allowAnonymous = false;
				this.options.userName = null;
				this.options.password = null;
				this.sessionId = null;
				console.log("x", self.options)
				if (self.options.onLogOff){
					console.log("x1")
					self.options.onLogOff.call(self.options.targetScope,evt);
				}
			} else
				this.options.onAuthenticateFailed.call(this.options.targetScope,evt);
		}
		else if (topic=="session_authenticated"){
			var date = new Date();
			
        	date.setTime(date.getTime() + (2*60*60*1000));
        	var expires = "; expires=" + date.toUTCString();
			this.sessionId = message.session;
			document.cookie = "kervisession" + "=" + message.session + expires + "; path=/";
			
			
			setTimeout(function(){
				if (self.options.onOpen)
					self.options.onOpen.call(self.options.targetScope, self.firstOnOpen,evt);
					self.firstOnOpen = false;
			}, 100
			);
			
		} else if (topic == "session_logoff"){ 
			if (self.options.onLogOff)
				self.options.onLogOff.call(self.options.targetScope,evt);
			if (this.allowAnonymous && this.options.userName != "anonymous"){
				this.authenticate("anonymous", null)
			} else {
				self.options.userName = null;
				self.options.password = null;
				self.sessionId = null;
			
				
			}
		} else if (evt.headers["type"]=="query_response"){
			this.handleRPCResponse({id:evt.headers["query_id"], response:message});
		}else if (evt.headers["type"]=="event"){
			console.log("e", evt);
			var topic_tag= evt.headers["topic"].split(":");
			
			this.handleEvent({event:topic_tag[1], id:topic_tag[2], args:message.args});
		}else if (message.messageType=="command")
			this.handleCommand(message);
		else
			console.log("Kervi spine message unknown",this.rpcQueue,evt);
	}

	onError(evt){
		console.log("Kervi on error",evt);
	}

	public addCommandHandler (command:string,callback){
		this.commandHandlers.push({command:command,callback:callback});
		var cmd={id:this.messageId++,"messageType":"registerCommandHandler","command":command};
		//this.websocket.send(JSON.stringify(cmd));
		this.websocket.send(
			this.exchange,
			{ topic:"registerCommandHandler", router_id:this.socketSession},
			JSON.stringify(cmd)
		)	
	};

	public addQueryHandler(query:string,callback){
		this.queryHandlers.push({query:query,callback:callback});
		var cmd={id:this.messageId++,"messageType":"registerQueryHandler","query":query};
		this.websocket.send(
			this.exchange,
			{ topic:"registerQueryHandler", router_id:this.socketSession},
			JSON.stringify(cmd)
		)
	};

	public addEventHandler=function(eventName:string,id:string,callback){
		if (id)
			this.eventHandlers.push({"eventName":eventName+"/"+id,callback:callback});
		else
			this.eventHandlers.push({"eventName":eventName,callback:callback});
		var cmd={id:this.messageId++,"messageType":"registerEventHandler","event":eventName,"eventId":id};
		this.websocket.send(
			this.exchange,
			{ topic:"registerEventHandler", router_id:this.socketSession},
			JSON.stringify(cmd)
		)
	};

	public sendCommand(command:string,...p:any[]){
		console.log("sec",arguments);
		var args=[];
		
		var callback=null;

		for (var i=0;(i<p.length);i++){
			if (p[i] instanceof Function)
				callback=p[i];
			else
				args.push(p[i]);
		}
		
		/*if (p.length>1){
			var argOffset=1;
			if ( callback && callback instanceof Function )
				argOffset+=1;
			for (var i=argOffset;(i<arguments.length);i++){
				args.push(arguments[i]);
			}
		}*/
		var cmd={id:this.messageId++,"args":args, kwargs:{}};
		
		if (callback && callback instanceof Function)
			this.addRPCCallback(cmd.id.toString(),callback, null, 0);
		console.log("sendCommand",this,cmd);
		this.websocket.send(
			this.exchange,
			{ topic:"command:"+ command, router_id:this.socketSession},
			JSON.stringify(cmd)
		)
	};

	public sendQuery(query,...p:any[]){
		var args=[];
		var callback=null;
		var callbackTimeout=null;
		var timeout = 10000;
		for (var i=0;(i<p.length);i++){
			if (p[i] instanceof Function)
				if (!callback) 
					callback=p[i];
				else
					callbackTimeout = p[i];
			else{
				if (callbackTimeout)
					timeout = p[i]
				else
					args.push(p[i]);
			}
		}
		 
		var cmd={id:this.messageId++,"messageType":"query","query":query,"args":args, kwargs:[], qts:0};
		this.addRPCCallback(cmd.id.toString(),callback, callbackTimeout, timeout);
		console.log("sendQuery", callback,cmd);
		//this.websocket.send(JSON.stringify(cmd));
		this.websocket.send(
			this.exchange,
			{ topic:"query:" + query, qts:0, query_id: cmd.id.toString(), router_id:this.socketSession, response_address:this.socketSession},
			JSON.stringify(cmd)
		)
	};

	public triggerEvent(eventName:string,id:string){
		var e={id:this.messageId++,"messageType":"event","event":eventName,"args":arguments};
		this.websocket.send(JSON.stringify(e));
	};
}