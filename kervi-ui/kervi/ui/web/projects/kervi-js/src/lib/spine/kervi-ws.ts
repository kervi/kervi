// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
import {KerviSpineBase} from './kervi-spinebase'
export class  KerviWSSpine extends KerviSpineBase{
    constructor(public constructorOptions){
        super(constructorOptions);
        console.log('kervi spine constructor');
    }

    protected connect() {
        if (this.isConnected) {
            console.log('Kervi is connected');
            return;
        }
        const self = this;
        this.websocket = new WebSocket(this.options.protocol + '://' + this.options.address);
        this.websocket.binaryType = 'arraybuffer';
        this.websocket.onopen = function(evt) {
            console.log('kervi spine on open');
            self.onOpen(evt);
        };

        this.websocket.onclose = function(evt) {
            self.onClose(evt) ;
        };

        this.websocket.onmessage = function(evt) {
            if (typeof evt.data === 'string') {
                const message = JSON.parse(evt.data);
                self.onMessage(message);
            } else {
                const jsonLen = new Int32Array(evt.data.slice(0, 4))[0];
                const jsonBlob = evt.data.slice(4, jsonLen + 4);
                const streamBlob = evt.data.slice(4 + jsonLen);
                const utf8decoder = new TextDecoder();
                const j = utf8decoder.decode(jsonBlob);
                self.onMessage(JSON.parse(j), streamBlob);
            }
        };

        this.websocket.onerror = function(evt) {
            self.onError(evt);
        };
    }

    public authenticate(userName, password) {
        this.options.userName = userName;
        this.options.password = password;
        const cmd = {id: this.messageId++, 'messageType': 'authenticate', 'userName': userName, 'password': password};
        console.log('swa', cmd);
        this.websocket.send(JSON.stringify(cmd));
    }

    public logoff() {
        const cmd = {id: this.messageId++, 'messageType': 'logoff', 'session': this.sessionId};
        this.sessionId = null;
        this.websocket.send(JSON.stringify(cmd));
    }

    onMessage(message, streamBlob= null) {
        // if (message.messageType !== 'stream') {
        //     console.log('on m', message);
        // }
        const self = this;
        const now   = new Date();
        const fpsDiff = now.getTime() - this.mpsTime.getTime();
        const seconds = fpsDiff / 1000;
        this.messageCount ++;
        if (seconds > 1) {
          this.mps = Math.round(this.messageCount / seconds);
          this.messageCount = 0;
          this.mpsTime = now;
          if (this.options.onMPS) {
             this.options.onMPS.call(this.options.targetScope, this.mps);
          }
        }

        if (message.messageType === 'authenticate') {
            console.log('authenticate');
            this.doAuthenticate = true;
            if (this.options.userName)
                this.authenticate(this.options.userName, this.options.password)
            else
                this.options.onAuthenticate.call(this.options.targetScope,message);
        } else if (message.messageType === 'authentication_failed') {
            console.log('authentication failed', this.options.userName);
            if (this.options.userName == 'anonymous') {
                this.allowAnonymous = false;
                this.options.userName = null;
                this.options.password = null;
                this.sessionId = null;
                if (self.options.onLogOff) {
                    self.options.onLogOff.call(self.options.targetScope, message);
                }
            } else
                this.options.onAuthenticateFailed.call(this.options.targetScope,message);
        }
        else if (message.messageType === 'session_authenticated'){
            const date = new Date();

            date.setTime(date.getTime() + (2 * 60 * 60 * 1000));
            const expires = '; expires=' + date.toUTCString();
            this.sessionId = message.session;
            document.cookie = 'kervisession' + '=' + message.session + expires + '; path=/';

            setTimeout(function() {
                console.log('to', self.options);
                if (self.options.onOpen)
                    self.options.onOpen.call(self.options.targetScope, self.firstOnOpen,message);
                    self.firstOnOpen = false;
            }, 100
            );
        } else if (message.messageType == 'session_logoff') { 
            if (self.options.onLogOff)
                self.options.onLogOff.call(self.options.targetScope,message);
            if (this.allowAnonymous && this.options.userName != 'anonymous'){
                this.authenticate('anonymous', null)
            } else {
                self.options.userName = null;
                self.options.password = null;
                self.sessionId = null;
            }
        } else if (message.messageType=='response')
            this.handleRPCResponse(message);
        else if (message.messageType=='event')
            this.handleEvent(message);
        else if (message.messageType=='stream')
            this.handleStream(message, streamBlob);
        else if (message.messageType=='command')
            this.handleCommand(message);
        else
            console.log('Kervi spine message unknown',this.rpcQueue, message);
    }

    onError(evt){
        console.log('Kervi on error',evt);
    }

    public addCommandHandler (command:string,callback){
        this.commandHandlers.push({command:command,callback:callback});
        var cmd={id:this.messageId++,'messageType':'registerCommandHandler','command':command};
        this.websocket.send(JSON.stringify(cmd));
    };

    public addQueryHandler(query:string,callback){
        this.queryHandlers.push({query:query,callback:callback});
        var cmd={id:this.messageId++,'messageType':'registerQueryHandler','query':query};
        this.websocket.send(JSON.stringify(cmd));
    };

    public addEventHandler = function(eventName: string, id: string, callback){
        if (id)
            this.eventHandlers.push({'eventName':eventName+'/'+id,callback:callback});
        else
            this.eventHandlers.push({'eventName':eventName,callback:callback});
        var cmd={id:this.messageId++,'messageType':'registerEventHandler','event':eventName,'eventId':id};
        //console.log('add event handler',cmd);
        this.websocket.send(JSON.stringify(cmd));
    };

    public addStreamHandler = function(streamId: string, streamEvents: string[], callback) {
        if (streamEvents && streamEvents.length > 0) {
            for (let event of streamEvents) {
                this.streamHandlers.push({'streamTag': streamId + '/' + event, callback: callback});
                const cmd = {
                    id: this.messageId++,
                    'messageType': 'registerStreamHandler',
                    'streamId': streamId,
                    'streamEvent': event
                };
                console.log('as', cmd);
                this.websocket.send(JSON.stringify(cmd));
            }
        } else {
            this.streamHandlers.push({'streamTag': streamId, callback: callback});
            const cmd = {
                id: this.messageId++,
                'messageType': 'registerStreamHandler',
                'streamId': streamId,
                'streamEvent': event
            };
            console.log('as', cmd);
            this.websocket.send(JSON.stringify(cmd));
        }
    };

    public removeStreamHandler = function(streamId: string, streamEvents: string[]) {
        if (streamEvents && streamEvents.length > 0) {
            for (let event of streamEvents) {
                //this.streamHandlers.push({'streamTag': streamId + '/' + event, callback: callback});
                const cmd = {
                    id: this.messageId++,
                    'messageType': 'removeStreamHandler',
                    'streamId': streamId,
                    'streamEvent': event
                };
                console.log('as', cmd);
                this.websocket.send(JSON.stringify(cmd));
            }
        } else {
            //this.streamHandlers.push({'streamTag': streamId, callback: callback});
            const cmd = {
                id: this.messageId++,
                'messageType': 'removeStreamHandler',
                'streamId': streamId,
                'streamEvent': event
            };
            console.log('as', cmd);
            this.websocket.send(JSON.stringify(cmd));
        }
    };

    public sendCommand(command:string,...p:any[]){
        console.log('sec',arguments);
        var args=[];
        
        var callback=null;

        for (var i=0;(i<p.length);i++){
            if (p[i] instanceof Function)
                callback=p[i];
            else
                args.push(p[i]);
        }
        
        var cmd={id:this.messageId++,'messageType':'command','command':command,'args':args};
        if (callback && callback instanceof Function)
            this.addRPCCallback(cmd.id.toString(), callback, null, 0);
        
        console.log('sendCommand',this,cmd);
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
         
        var cmd={id:this.messageId++,'messageType':'query','query':query,'args':args};
        this.addRPCCallback(cmd.id.toString(),callback, callbackTimeout, timeout);
        console.log('sendQuery', callback,cmd);
        this.websocket.send(JSON.stringify(cmd));
    };

    public triggerEvent(eventName:string,id:string){
        var e={id:this.messageId++,'messageType':'event','event':eventName,'args':arguments};
        this.websocket.send(JSON.stringify(e));
    };
}