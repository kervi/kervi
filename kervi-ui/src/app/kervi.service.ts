// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Injectable , EventEmitter} from '@angular/core';
import {KerviSpine} from "../kervi-spine";
import {BehaviorSubject, Subject} from 'rxjs/Rx';


@Injectable()
export class KerviService {
  spine: KerviSpine = null;
  public  application$: BehaviorSubject<any>;
  
  connected$: BehaviorSubject<Boolean> ;
  

  constructor() 
  { 
    console.log("kervi service constructor");
    
    this.connected$ = new BehaviorSubject<Boolean>(false);
    this.application$= new BehaviorSubject<any>(null);
    
  }

  public connect(){
    this.spine = new KerviSpine({
      address:"ws://"+window.location.hostname+":9000",
      //address:"ws://192.168.0.144:9000",
      onOpen: this.onOpen,
      onClose:this.onClose,
      targetScope:this,
     });
  }

  

  private onOpen(){
    console.log("kervice service on open",this);
    var self=this;
    this.spine.sendQuery("GetApplicationInfo",function(message){
		  console.log("appinfo",message);
		  self.application$.next(message);
      self.connected$.next(true);
	  });

    
  }

  private onClose(){
    this.connected$.next(false);
  }

  private onHeartbeat(){

  }

  private onConnect(){

  }

}
