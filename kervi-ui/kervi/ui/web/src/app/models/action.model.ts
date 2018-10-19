// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { BehaviorSubject } from 'rxjs/Rx';
import { IComponent, DashboardLink } from './IComponent.model'
import { DynamicNumberModel } from './dynamicValues.model'

export class ActionModel implements IComponent {
    public id: string = null;
    public name: string = null;
    public componentType = "action";
    public runCommand:string = "";
    public interruptCommand:string = "";
    public ui:any = {}
    public type: string = null;
    public visible: boolean = true;
    public dashboards: DashboardLink[] = [];
    public running$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    
    updateReferences(){};
    reload(component:IComponent){};
    removeReferences(components:IComponent[]){};
    
    constructor(message: any){
        this.id=message.id;
        this.name=message.name;
        this.ui=message.ui;
        this.visible=message.visible;
        this.type=message.type;
        this.runCommand = message.runCommand;
        this.interruptCommand = message.interruptCommand;
        this.running$.next(message.running);

        for (let dashboardLink of message.dashboardLinks){
            this.dashboards.push(new DashboardLink(this, dashboardLink)); 
        }
    }

    
}