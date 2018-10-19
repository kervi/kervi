// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Injectable } from '@angular/core';
import  { ControllerModel}  from '../models/controller.model'
import { KerviService } from "../kervi.service";
import { IComponent } from "../models/IComponent.model";
import { BehaviorSubject, Subject } from 'rxjs/Rx';

@Injectable()
export class ControllersService {
    
    constructor(private kerviService: KerviService) {
        var self = this;

        var s=this.kerviService.getComponents$().subscribe(function(v){
            self.refreshControllers()
        }); 
    }

    private refreshControllers() {
        var self = this;
        
        var controllers= this.kerviService.getComponentsByType("controller");
        for (let controller of controllers){
            if (controller.inputs.length==0){
                for(var ref of controller.inputReferences){
                    controller.inputs.push(this.kerviService.getComponent(ref.id))
                }
            }
            if (controller.outputs.length==0){
                for(var ref of controller.outputReferences){
                    controller.outputs.push(this.kerviService.getComponent(ref.id))
                }
            }
            if (controller.actions.length==0){
                for(var ref of controller.actionsReferences){
                    controller.actions.push(this.kerviService.getComponent(ref.id))
                }
            }
        }
        //console.log("rc", controllers);    
    }
}
