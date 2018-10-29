// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
import {KerviSpineBase} from "./ikervi-spine"
export class  KerviSpine extends KerviSpineBase{
	
	constructor(public constructorOptions){
		super(constructorOptions);
		console.log("kervi spine constructor");
	}

	protected connect(){
		if (this.isConnected){
			console.log("Kervi is connected");
			return
		}
		var self=this;
		this.websocket= new WebSocket(this.options.protocol + "://" + this.options.address);
		this.websocket.onopen = function(evt) { 
			console.log("kervi spine on open");
			self.onOpen(evt);
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

	public authenticate(userName, password){
		this.options.userName = userName;
		this.options.password = password;
		if (this.options.onAuthenticateStart)
			this.options.onAuthenticateStart.call(this.options.targetScope);
		var cmd={id:this.messageId++,"messageType":"authenticate","userName":this.options.userName, "password": this.options.password};
		this.websocket.send(JSON.stringify(cmd));
	}

	public logoff(){
		//this.options.userName = this.allowAnonymous ? "anonymous" : null;
		//this.options.password = null;

		var cmd={id:this.messageId++,"messageType":"logoff", "session": this.sessionId};
		this.sessionId = null;
		this.websocket.send(JSON.stringify(cmd));
	}

	onMessage(evt){
		//console.log("on m",evt.data);
		var message=JSON.parse(evt.data);
		var self = this;
		
		if (message.messageType=="authenticate"){
			console.log("authenticate");
			this.doAuthenticate = true;
			if (this.options.userName)
				this.authenticate(this.options.userName, this.options.password)
			else
				this.options.onAuthenticate.call(this.options.targetScope,evt);
		}
		else if (message.messageType=="authentication_failed"){
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
		else if (message.messageType=="session_authenticated"){
			var date = new Date();
			
        	date.setTime(date.getTime() + (2*60*60*1000));
        	var expires = "; expires=" + date.toUTCString();
			this.sessionId = message.session;
			document.cookie = "kervisession" + "=" + message.session + expires + "; path=/";
			
			
			setTimeout(function(){
				console.log("to", self.options);
				if (self.options.onOpen)
					self.options.onOpen.call(self.options.targetScope, self.firstOnOpen,evt);
					self.firstOnOpen = false;
			}, 100
			);
			
		} else if (message.messageType == "session_logoff"){ 
			if (self.options.onLogOff)
				self.options.onLogOff.call(self.options.targetScope,evt);
			if (this.allowAnonymous && this.options.userName != "anonymous"){
				this.authenticate("anonymous", null)
			} else {
				self.options.userName = null;
				self.options.password = null;
				self.sessionId = null;
			
				
			}
		} else if (message.messageType=="response")
			this.handleRPCResponse(message);
		else if (message.messageType=="event")
			this.handleEvent(message);
		else if (message.messageType=="command")
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
		this.websocket.send(JSON.stringify(cmd));
	};

	public addQueryHandler(query:string,callback){
		this.queryHandlers.push({query:query,callback:callback});
		var cmd={id:this.messageId++,"messageType":"registerQueryHandler","query":query};
		this.websocket.send(JSON.stringify(cmd));
	};

	public addEventHandler=function(eventName:string,id:string,callback){
		if (id)
			this.eventHandlers.push({"eventName":eventName+"/"+id,callback:callback});
		else
			this.eventHandlers.push({"eventName":eventName,callback:callback});
		var cmd={id:this.messageId++,"messageType":"registerEventHandler","event":eventName,"eventId":id};
		//console.log("add event handler",cmd);
		this.websocket.send(JSON.stringify(cmd));
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
		
		var cmd={id:this.messageId++,"messageType":"command","command":command,"args":args};
		if (callback && callback instanceof Function)
			this.addRPCCallback(cmd.id.toString(), callback, null, 0);
		
		console.log("sendCommand",this,cmd);
		this.websocket.send(JSON.stringify(cmd));
	};

	public sendQuery(query,...p:any[]){
		var args=[];
		var callback=null;
		var callbackTimeout = null
		var timeout = 10000
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
		 
		var cmd={id:this.messageId++,"messageType":"query","query":query,"args":args};
		this.addRPCCallback(cmd.id.toString(),callback, callbackTimeout, timeout);
		console.log("sendQuery", callback,cmd);
		this.websocket.send(JSON.stringify(cmd));
	};

	public triggerEvent(eventName:string,id:string){
		var e={id:this.messageId++,"messageType":"event","event":eventName,"args":arguments};
		this.websocket.send(JSON.stringify(e));
	};
}