// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
import { IComponent, DashboardLink } from "./IComponent.model"
import { ComponentRef } from "./ComponentRef"
import { BehaviorSubject } from 'rxjs/Rx';
//import { ControllersFactory } from './factory' 

export class ControllerModel implements IComponent {
    public type: string;
    public visible: boolean;
    public componentType="controller"
    public ui:any = {}
    public name: string;
    public id: string;
    public parameters: any;
    public inputs: IComponent[] = [];
    public outputs: IComponent[] = [];
    public actions: IComponent[] = [];
    public inputReferences: ComponentRef[] = [];
    public outputReferences: ComponentRef[] = [];
    public actionsReferences: ComponentRef[] = [];
    public dashboards: DashboardLink[]=[];
    public template:string;

    constructor(message: any) {
        this.id = message.id;
        this.name = message.name;
        this.type = message.type;
        this.ui = message.ui;
        this.visible = message.visible;
        this.parameters = message.parameters;
        this.template=message.template;
        for(var ref of message.inputs){
            this.inputReferences.push( new ComponentRef(ref));
        }

        for(var ref of message.outputs){
            this.outputReferences.push( new ComponentRef(ref));
        }

        for(var ref of message.actions){
            this.actionsReferences.push( new ComponentRef(ref));
        }

        for (let dashboardLink of message.dashboardLinks){
            this.dashboards.push( new DashboardLink(this, dashboardLink)); 
        }
    }

    updateReferences(){};
    removeReferences(components:IComponent[]){};
    reload(component:IComponent){};
}