// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { BehaviorSubject } from 'rxjs/Rx';
import { IComponent, DashboardLink } from './IComponent.model'
import { DynamicNumberModel } from './dynamicValues.model'
import { KerviService } from '../kervi.service'

export class SensorModel implements IComponent {
    public subSensors:SensorModel[] = [];
    public id: string = null;
    public name: string = null;
    public componentType = "sensor";
    public ui:any = {}
    public type: string = null;
    public visible: boolean = true;
    public value:DynamicNumberModel = null;
    public valueType:string = null;
    public dashboards: DashboardLink[] = [];

    
    updateReferences(){};
    reload(component:IComponent){};
    removeReferences(components:IComponent[]){};
    
    constructor(message: any, kerviService: KerviService){
        this.id=message.id;
        this.name=message.name;
        this.ui=message.ui;
        this.visible=message.visible;
        this.value = new DynamicNumberModel(message, kerviService);
        this.valueType = message.value_type;
        this.type=message.type;
        for(var subSensor of message.subSensors){
            this.subSensors.push(new SensorModel(subSensor, kerviService));
        }

        for (let dashboardLink of message.dashboardLinks){
            this.dashboards.push(new DashboardLink(this, dashboardLink)); 
        }
    }
}