// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
import { IComponent, DashboardLink } from "./IComponent.model"
import { ComponentRef } from "./ComponentRef"
import { KerviBaseService } from '../kervi-js.service'

export class Controller implements IComponent {
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
    private kerviService:KerviBaseService

    constructor(message: any, kerviService:KerviBaseService) {
        this.kerviService = kerviService;
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

    updateReferences(){
        if (this.inputs.length==0){
            for(var ref of this.inputReferences){
                var component = this.kerviService.getComponent(ref.id)
                if (component)
                    this.inputs.push(component)
            }
        }
        if (this.outputs.length==0){
            for(var ref of this.outputReferences){
                var component = this.kerviService.getComponent(ref.id)
                if (component)
                    this.outputs.push(component)
            }
        }
        if (this.actions.length==0){
            for(var ref of this.actionsReferences){
                var component = this.kerviService.getComponent(ref.id)
                if (component)
                    this.actions.push(component)
            }
        }
    };
    removeReferences(components:IComponent[]){};
    reload(component:IComponent){};
}