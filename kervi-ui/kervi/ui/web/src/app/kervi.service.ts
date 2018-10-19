// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Injectable , EventEmitter} from '@angular/core';
import {KerviSpineBase} from "../ikervi-spine";
import {KerviSpine} from "../kervi-spine";
import {KerviIO} from "../kervi_io";
import {BehaviorSubject, Subject} from 'rxjs/Rx';
import {IComponent} from './models/IComponent.model';
import { ComponentFactory } from './models/factory';
import { DashboardMessageModel } from './models/dashboard.model';
import { getComponentViewDefinitionFactory } from '@angular/core/src/view';

declare var kerviSocketAddress : any;
declare var socketProtocol : any;

@Injectable()
export class KerviService {
  spine: KerviSpineBase = null;
  private appInfo=null;
  public  application$: BehaviorSubject<any>;
  private  texts:{} = null;
  private components : IComponent[] = [];
  private components$: BehaviorSubject<IComponent[]> = new  BehaviorSubject<IComponent[]>([]);
  public doAuthenticate: boolean = false;
  public inAuthentication$: BehaviorSubject<Boolean> = new  BehaviorSubject<Boolean>(false);
  private logMessages:DashboardMessageModel[] = [];
  private logMessages$: BehaviorSubject<DashboardMessageModel[]> = new  BehaviorSubject<DashboardMessageModel[]>([]);
  
  connected$: BehaviorSubject<Boolean> = new  BehaviorSubject<Boolean>(false);
  IPCReady$: BehaviorSubject<Boolean> = new  BehaviorSubject<Boolean>(false);
  authenticationFailed$: BehaviorSubject<Boolean> = new  BehaviorSubject<Boolean>(false);


  constructor() 
  { 
    console.log("kervi service constructor");
    var self=this;
    this.connected$ = new BehaviorSubject<Boolean>(false);
    this.application$= new BehaviorSubject<any>(null);
    
    setInterval(function(){
      if (self.connected$.value){
        //self.refreshComponents()  
        
      }
    },10000);

     var s1=this.IPCReady$.subscribe(function(connected){
        if (connected){
          console.log("kervi service ipc ready (connected)")
          self.spine.addEventHandler("valueChanged","",function(id, value){
            for (let component of self.components){
              if (component.id==value.id){
                var dynamicValue = component as any;
              
                dynamicValue.valueTS=new Date(this.timestamp + " utc");
                dynamicValue.setValue(value.value)  
              }
            }
          });
        
        self.spine.addEventHandler("actionStarted","",function(id){
          for (let component of self.components){
            if (component.id==id){
              var action = component as any;
              action.running$.next(true)
            }
          }
              
        });

        self.spine.addEventHandler("actionDone","",function(id){
          for (let component of self.components){
            if (component.id==id){
              var action = component as any;
              action.running$.next(false)
            }
          }
        });

        self.spine.addEventHandler("userLogMessage", null, function(v){
          var messages = self.logMessages$.value
          //console.log("lm", this);
          messages.unshift(new DashboardMessageModel(this));
          if (messages.length>10)
              messages.pop();
          self.logMessages$.next(messages);   
       });

      }
    });

  }

  private refreshComponents(){
    var self=this;
    self.spine.sendQuery("getComponentInfo",function(message){
    console.log("refresh component info",message);
    self.components = []
    self.components$.next([]);
    self.components = ComponentFactory.createComponents(message, this);
    console.log("refresh components",self.components);
    self.components$.next(self.components);
    });
  }

  public text(key:string, defaultValue:string=""):string{
    //  console.log("t", key, this.texts);
    if (this.texts && key in this.texts){
      return this.texts[key];
    } else
      return defaultValue
  }


  public getComponents$(){
    return this.components$.asObservable();
  }

  public getLogMessages$(){
    return this.logMessages$.asObservable();
  }

  public getComponent(id:string){
    for (var component of this.components){
      if (component.id == id)
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
    console.log("ks", address, sessionStorage.getItem("mqc"));
    
    if (sessionStorage.getItem("mqc")){
      
      this.spine = new KerviIO({
        onOpen: this.onOpen,
        onClose:this.onClose,
        onAuthenticate:this.onAuthenticate,
        onAuthenticateFailed:this.onAuthenticateFailed,
        onLogOff: this.onLogoff,
        onAuthenticateStart: this.onAuthenticateStart,
        targetScope:this,
        apiToken: JSON.parse(sessionStorage.getItem("mqc"))
      });
    } else
      this.spine = new KerviSpine({
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

  isAnonymous(){
    return this.spine.options.userName == "anonymous" 
  }

  authenticate(userName, password){
    this.authenticationFailed$.next(false);
    
    this.spine.authenticate(userName, password);
  }

  logoff(){
    this.inAuthentication$.next(false);
    this.spine.logoff()
  }

  private onAuthenticateStart(){
    this.inAuthentication$.next(true);
  }

  private onAuthenticate(){
    this.doAuthenticate = true;
    
    this.reset();
  }

  private onAuthenticateFailed(){
    this.authenticationFailed$.next(true);
    this.inAuthentication$.next(false);
  }

  private onLogoff(){
    console.log("ol");
    this.doAuthenticate = true;
    this.inAuthentication$.next(false);
    //this.spine.logoff()
    if (this.spine.firstOnOpen)
      this.IPCReady$.next(true);
    
    this.authenticationFailed$.next(false);
    this.reset();
  }

  private reset(){
    //this.inAuthentication$.next(false);
    this.components = [];
    this.components$.next(this.components);
    this.connected$.next(false);
  }

  private getComponentInfo(retryCount){
    var self = this;
    this.spine.sendQuery("GetApplicationInfo",function(appInfo){
      console.log("appinfo",appInfo);
      this.spine.sendQuery("getComponentInfo",function(message){
        console.log("component info",message);
        self.application$.next(appInfo);
        self.texts = appInfo.display.texts;
        self.components = ComponentFactory.createComponents(message, self);
        self.components$.next(self.components);
        self.connected$.next(true);
        //self.inAuthentication$.next(false);
        console.log("components",self.components); 
      },
      function(){
        console.log("get component info timeout");
        if (retryCount>0)
          self.getComponentInfo(retryCount-1)
      });  
	  });
  }

  private onOpen(first){
    console.log("kervice service on open", this.spine.firstOnOpen, first,this);
    var self=this;
    
    this.doAuthenticate = this.spine.doAuthenticate;
    this.getComponentInfo(2)
    if (self.spine.firstOnOpen){
      this.IPCReady$.next(true);
      this.spine.addEventHandler("moduleStarted","",function(){
          console.log("module loaded",self.components); 
          setTimeout(self.refreshComponents(), 2000); 
      });           
      
      this.spine.addEventHandler("moduleStopped","",function(){
          console.log("module unloaded"); 
          setTimeout(function() {
            console.log("module unloaded, refresh");
          
            self.refreshComponents()
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
