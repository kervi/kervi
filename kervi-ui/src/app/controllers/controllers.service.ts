import { Injectable } from '@angular/core';
import { ControllerModel, ControllerButtonModel, ControllerAxisModel } from './models/controller.model'
import {KerviService} from "../kervi.service";
import {BehaviorSubject, Subject} from 'rxjs/Rx';

@Injectable()
export class ControllersService {
    private controllers: ControllerModel[] = [];
    private controllerTypes:string[] = [];
    private currentCameraController:ControllerModel = null;
    private cameraControllers:ControllerModel[] =[];
    private _controllers$: BehaviorSubject<ControllerModel[]> = new BehaviorSubject<ControllerModel[]>([]);
    private _controllerTypes$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
    private _cameraControllers$: BehaviorSubject<ControllerModel[]>= new BehaviorSubject<ControllerModel[]>([]);
    private _currentCameraController$: BehaviorSubject<ControllerModel>= new BehaviorSubject<ControllerModel>(null);
    constructor (private kerviService:KerviService){
        var self=this;
        
            var s=this.kerviService.connected$.subscribe(function(connectedValue){
                if (connectedValue){
                    self.kerviService.spine.sendQuery("getControllerInfo",null,function(message){
                        console.log("controller info",message);
                        self.updateControllers.call(self,message);
                        self._controllers$.next(self.controllers);
                        self._controllerTypes$.next(self.controllerTypes);
                        self.updateCameraControllers();
                        self.setEventHandlers();
                        console.log("ciu",self.controllers);
                    });    
                } else {
                  self.controllers=[];
                  self.controllerTypes=[];
                  self._controllers$.next(self.controllers);
                  self._controllerTypes$.next(self.controllerTypes);
                }
            });
         

        
    }

    public getControllers$(){
        return this._controllers$.asObservable();
    }

    public getControllerTypes$(){
        return this._controllerTypes$.asObservable();
    }

    public getCurrentCameraController$(){
        return this._currentCameraController$.asObservable();
    }

    public getCameraControllers$(){
        return this._cameraControllers$.asObservable();
    }

    public getDashboardControllers(dashboard:string, type:string=""){
        //console.log("gdc",dashboard,type);

        var result=[];
        for (let controller of this.controllers){
            if (controller.dashboards && controller.dashboards.indexOf(dashboard)>=0)
                if (type=="" || controller.type==type)
                  result.push(controller);
        }
        return result;
    }

    public getDashboardCameras(dashboard:string){
        //console.log("gdc",dashboard,type);

        var result=[];
        for (let controller of this.cameraControllers){
            if (controller.dashboards && controller.dashboards.indexOf(dashboard)>=0)
                result.push(controller);
        }
        return result;
    }

    public setCurrentCamera(cameraId:string){
        for (let controller of this.cameraControllers){
            if (controller.id == cameraId){
                this.currentCameraController=controller;
                this._currentCameraController$.next(this.currentCameraController);
            }
        }
    }

    private setEventHandlers(){
      var self=this;
      this.kerviService.spine.addEventHandler("controllerButtonStateChange","",function(id,value){
			    console.log("bsc",this,id,value);
                for(let controller of self.controllers)
				  {
				    for( let button of controller.buttons){
						  if (button.id==value.button){
							  button.state$.next(value.state);
						  }
					  }
				  }
			  });

		    this.kerviService.spine.addEventHandler("changeControllerAxisValue","",function(id,value){
			    
          for(let controller of self.controllers)
				  {
				    for( let axis of controller.axes){
						  if (axis.id==value.axis){
							  axis.value$.next(value.value);
						  }
					  }
				  }
			  });


    }

    private updateCameraControllers(){
        var result=[];
        for (let controller of this.controllers){
            if (controller.type=="cam")
                result.push(controller);
        }
        this.cameraControllers=result;
        this._cameraControllers$.next(this.cameraControllers);
        if (this.cameraControllers.length>0)
            this.setCurrentCamera(this.cameraControllers[0].id);
    }

    private updateControllers=function(message){
        if (Array.isArray(message)){
            for (var i=0;(i<message.length);i++){
                this.updateControllers(message[i]);
            }	
        } else {
            var controller=new ControllerModel(message);
            this.controllers.push(controller);
            if (this.controllerTypes.indexOf(controller.type)==-1){
              this.controllerTypes.push(controller.type);
            }
        }
    }
}
