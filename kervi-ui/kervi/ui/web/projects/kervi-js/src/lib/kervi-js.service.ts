// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
import { Injectable } from '@angular/core';
import { KerviSpineBase } from "./spine/kervi-spinebase";
import { KerviWSSpine } from "./spine/kervi-ws";
import { KerviRMQSpine } from "./spine/kervi-rmq";
import {  BehaviorSubject, Observable } from 'rxjs';
import { IComponent } from './models/IComponent.model';
import { ComponentFactory } from './models/factory';
import { DashboardMessageModel } from './models/dashboard.model';
import { Dashboard } from './models/dashboard.model'
declare var kerviSocketAddress : any;
declare var socketProtocol : any;

export enum ConnectionState {disconnected, loading, authenticate, connected};
export enum UserLogStateType {normal, warning, error};
@Injectable()
export class KerviBaseService {
  public spine: KerviSpineBase = null;
  
  private appInfo=null;
  private  texts:{} = null;
  private components : IComponent[] = [];
  private components$: BehaviorSubject<IComponent[]> = new  BehaviorSubject<IComponent[]>([])
  
  public connectionState$: BehaviorSubject<ConnectionState> = new  BehaviorSubject<ConnectionState>(ConnectionState.disconnected);
  public  application$: BehaviorSubject<any>;
  public doAuthenticate: boolean = false;
  public componentsChanged$: BehaviorSubject<Boolean> = new  BehaviorSubject<Boolean>(false);
  
  
  
  private logMessages:DashboardMessageModel[] = [];
  private logMessages$: BehaviorSubject<DashboardMessageModel[]> = new  BehaviorSubject<DashboardMessageModel[]>([]);
  private lastLogMessage$: BehaviorSubject<DashboardMessageModel> = new  BehaviorSubject<DashboardMessageModel>(null);
  private LogMessageCount$: BehaviorSubject<number> = new  BehaviorSubject<number>(0);
  private LogMessageState$: BehaviorSubject<UserLogStateType> = new  BehaviorSubject<UserLogStateType>(UserLogStateType.normal);
  
  IPCReady$: BehaviorSubject<Boolean> = new  BehaviorSubject<Boolean>(false);
  //authenticationFailed$: BehaviorSubject<Boolean> = new  BehaviorSubject<Boolean>(false);
  
  private _resolveSelf;
  private _rejectSelf;
  private authPromise:Promise<string>=null;

  constructor() 
  { 
    console.log("kervi service constructor");
    var self=this;
    this.application$= new BehaviorSubject<any>(null);
     var s1=this.IPCReady$.subscribe(function(connected){
        if (connected){
          console.log("kervi service ipc ready (connected)")
          self.spine.addEventHandler("valueChanged","",function(id, value){
            for (let component of self.components){
              if (component.id==value.id){
                var dynamicValue = component as any;
                //console.log("nv", this.timestamp, new Date(this.timestamp));
                dynamicValue.valueTS=new Date(this.timestamp);
                dynamicValue.set(value.value, false);  
              }
            }
          });
        
        self.spine.addEventHandler("actionStarted","",function(id){
          console.log("as", id);
          for (let component of self.components){
            if (component.id==id){
              var action = component as any;
              action.running$.next(true)
            }
          }
              
        });

        self.spine.addEventHandler("actionDone","",function(id){
          console.log("ad", id);
          for (let component of self.components){
            if (component.id==id){
              var action = component as any;
              action.running$.next(false)
            }
          }
        });

        self.spine.addEventHandler("userLogMessage", null, function(v){
          var messages = self.logMessages$.value
          //Wconsole.log("lm", this);
          var newMessage = new DashboardMessageModel(this);
          messages.unshift(newMessage);
          if (messages.length>10)
              messages.pop();

          var hasErrors = 0;
          var hasWarnings = 0;
          for(var message of messages)  {
              if (message.level == 1)
                  hasErrors ++;
              if (message.level == 2)
                  hasWarnings ++;    
          };
          if (hasErrors)
              self.LogMessageState$.next(UserLogStateType.error)
          else if (hasWarnings)
            self.LogMessageState$.next(UserLogStateType.warning)
          else
            self.LogMessageState$.next(UserLogStateType.normal)
          self.LogMessageCount$.next(messages.length)
          self.lastLogMessage$.next(newMessage);
          self.logMessages$.next(messages);
       });
      }
    });
  }

  public text(key:string, defaultValue:string=""):string{
    //  console.log("t", key, this.texts);
    if (this.texts && key in this.texts){
      return this.texts[key];
    } else
      return defaultValue
  }


  // public getComponents$(){
  //   return this.components$.asObservable();
  // }

   public getLogMessages$():Observable<DashboardMessageModel[]>{
     return this.logMessages$.asObservable();
   }

   public getLastLogMessage$():Observable<DashboardMessageModel>{
    return this.lastLogMessage$.asObservable();
  }

  public getLogState$():Observable<UserLogStateType>{
    return this.LogMessageState$.asObservable();
  }

  public getLogMessageCount$():Observable<number>{
    return this.LogMessageCount$.asObservable();
  }

  public isAppEmpty(){
    var defaultDashboard = this.getDefaultDashboard();
    if (defaultDashboard)
      return defaultDashboard.isEmpty();
    return true;
  }

  public getComponent(id:string, componentType:string = null){
    for (var component of this.components){
      if (component.id == id && (componentType==null || component.componentType == componentType))
        return component;
    }
    return null;
  }

  public getComponentsByType(type:string){
    var result = []
    for (var component of this.components){
      if (component.componentType == type)
        result.push(component);
    }
    return result;
  }

  public getDefaultDashboard():Dashboard{
    var dashboards = this.getComponentsByType("dashboard") as Dashboard[] ;
    for (let dashboard of dashboards) {
        if (dashboard.isDefault)
            return dashboard
    }
    if (dashboards.length>0)
      return dashboards[0];
    return null;
}

  public connect(){
    var address = null;
    var protocol = "ws"
    try{
      if (kerviSocketAddress)
      {
        address = kerviSocketAddress;
      }
      if (socketProtocol)
      {
        protocol = socketProtocol;
      }
    } catch(e) {
      //for testing with ng serve
      var httpProtocol = location.protocol;
      if (httpProtocol == "https")
        protocol="wss"
      var httpHost = window.location.hostname;
      address = httpHost + ":9000";
    }
    console.log("ks", address);
    
    this.spine = new KerviWSSpine({
      address: address,
      protocol: protocol,
      onOpen: this.onOpen,
      onClose:this.onClose,
      onAuthenticate:this.onAuthenticate,
      onAuthenticateFailed:this.onAuthenticateFailed,
      onLogOff: this.onLogoff,
      onAuthenticateStart: this.onAuthenticateStart,
      targetScope:this
    });
  }

  public connectMQ(){
    
    //if (!sessionStorage.getItem("mqc"))
    //  sessionStorage.setItem("mqc", '{"key_id":"c5bd0824bda44ffeaba8010383f1af96","api_token":"4776ec9d4bdf4b3192ffa6a1f37d15aa145e2e665ae64e46afd766ee851ac046","api_channel":"20bddf88a4434e99ba0e014de2b875c7","app_id":"app_1"}');
    console.log("ks", sessionStorage.getItem("mqc"));
    
    if (sessionStorage.getItem("mqc")){
      
      this.spine = new KerviRMQSpine({
        onOpen: this.onOpen,
        onClose:this.onClose,
        onAuthenticate:this.onAuthenticate,
        onAuthenticateFailed:this.onAuthenticateFailed,
        onLogOff: this.onLogoff,
        onAuthenticateStart: this.onAuthenticateStart,
        targetScope:this,
        apiToken: JSON.parse(sessionStorage.getItem("mqc"))
      });
    } else {
      console.log("qmc not found in storage")
    }
  }

  isAnonymous(){
    return this.spine.options.userName == "anonymous" 
  }

  authenticate(userName, password){
    //this.authenticationFailed$.next(false);
    console.log("ksa", userName, password);
    this.authPromise=new Promise<string>((resolve, reject) =>{
      this._resolveSelf = resolve;
      this._rejectSelf = reject;
    });
    this.spine.authenticate(userName, password);
    return this.authPromise;
  }

  logoff(){
    this.spine.logoff()
  }

  private onAuthenticateStart(){
    
  }

  private onAuthenticate(){
    this.doAuthenticate = true;
    //this.connectionState$.next(ConnectionState.authenticate);
    this.reset();
    this._resolveSelf("ok");
  }

  private onAuthenticateFailed(){
    //this.authenticationFailed$.next(true);
    this._rejectSelf("error");
  }

  private onLogoff(){
    console.log("olxrc");
    this.doAuthenticate = true;
    if (this.spine.firstOnOpen)
      this.IPCReady$.next(true);
    
    this.reset();
  }

  private reset(){
    this.components = [];
    this.components$.next(this.components);
    if (this.IPCReady$.value)
      this.connectionState$.next(ConnectionState.authenticate);
    else
      this.connectionState$.next(ConnectionState.disconnected);
  }

  private getComponentInfo(retryCount, module_load){
    var self = this;
    this.spine.sendQuery("GetApplicationInfo",function(appInfo){
      console.log("appinfo",appInfo);
      this.spine.sendQuery("getComponentInfo",function(message){
        console.log("component info",message);
        self.application$.next(appInfo);
        self.texts = appInfo.display.texts;
        self.components = ComponentFactory.createComponents(message, self);
        ComponentFactory.FixControllerReferences(self.getComponentsByType("controller"));
        self.components$.next(self.components);
        self.connectionState$.next(ConnectionState.connected);
        if (module_load)
          self.componentsChanged$.next(true)
        console.log("components",self.components); 
      },
      function(){
        console.log("get component info timeout");
        if (retryCount>0)
          self.getComponentInfo(retryCount-1, module_load)
      });  
	  });
  }

  private onOpen(first){
    console.log("kervice service on open", this.spine.firstOnOpen, first,this);
    var self=this;
    this.connectionState$.next(ConnectionState.loading);
    this.doAuthenticate = this.spine.doAuthenticate;
    this.getComponentInfo(2, false)
    if (self.spine.firstOnOpen){
      this.IPCReady$.next(true);
      this.spine.addEventHandler("moduleStarted","",function(){
          console.log("module loaded",self.components); 
          setTimeout(function(){
            self.getComponentInfo(2, true)
          }
          , 2000); 
      });           
      
      this.spine.addEventHandler("moduleStopped","",function(){
          console.log("module unloaded"); 
          setTimeout(function() {
            console.log("module unloaded, refresh");
            self.getComponentInfo(2, true);
        }, 5000);           
      });
    }
    
  }

  private onClose(){
    this.reset()
    console.log("ks on close");
    this.IPCReady$.next(false);
  }

  private onHeartbeat(){

  }

  private onConnect(){

  }

}
