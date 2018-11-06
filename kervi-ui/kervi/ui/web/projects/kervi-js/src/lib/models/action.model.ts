// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { BehaviorSubject } from 'rxjs';
import { IComponent, DashboardLink } from './IComponent.model'
import { KerviBaseService } from '../kervi-js.service'
export class Action implements IComponent {
    private kerviService:KerviBaseService = null;

    public id: string = null;
    public name: string = null;
    public componentType = "action";
    public runCommand:string = "";
    public interruptCommand:string = "";
    public ui = {
        type: "",
        orientation: "",
        visible: true
    }
    public dashboards: DashboardLink[] = [];
    public running$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    
    constructor(message: any, kerviService:KerviBaseService){
        this.kerviService = kerviService;
        this.id=message.id;
        this.name=message.name;
        this.ui=message.ui;
        this.ui.visible=message.visible;
        this.ui.type=message.type;
        this.runCommand = message.runCommand;
        this.interruptCommand = message.interruptCommand;
        this.running$.next(message.running);

        for (let dashboardLink of message.dashboardLinks){
            this.dashboards.push(new DashboardLink(this, dashboardLink)); 
        }
    }

    public run(parameters){
        if (!this.running$.value){
            if (parameters)
                this.kerviService.spine.sendCommand(this.runCommand, ...parameters.actionParameters);
            else
                this.kerviService.spine.sendCommand(this.runCommand);
        }
    }

    public interrupt(parameters){
        if (parameters)
            this.kerviService.spine.sendCommand(this.interruptCommand, ...parameters.actionParameters);
        else
            this.kerviService.spine.sendCommand(this.interruptCommand);
    }
}