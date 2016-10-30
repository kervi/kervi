import { Injectable , EventEmitter} from '@angular/core';
import {KerviSpine} from "../kervi-spine";
import {BehaviorSubject, Subject} from 'rxjs/Rx';


@Injectable()
export class KerviService {
  spine: KerviSpine = null;
  public  Application = null;
  
  Connected: BehaviorSubject<Boolean> ;
  

  constructor() 
  { 
    console.log("kervi service constructor");
    
    this.Connected = new BehaviorSubject<Boolean>(false);
    
    
  }

  public Connect(){
    this.spine = new KerviSpine({
      //address:"ws://"+window.location.hostname+":9000",
      address:"ws://192.168.0.125:9000",
      onOpen: this.onOpen,
      onClose:this.onClose,
      targetScope:this,
     });
  }

  

  private onOpen(){
    console.log("kervice service on open",this);
    
    this.spine.sendQuery("GetApplicationInfo",function(message){
		  console.log("appinfo",message);
		  this.Application=message;
      this.Connected.next(true);
	  });

    
  }

  private onClose(){
    this.Connected.next(false);
  }

  private onHeartbeat(){

  }

  private onConnect(){

  }

}
