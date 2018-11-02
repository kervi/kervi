// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { BehaviorSubject } from 'rxjs';
import { IComponent, DashboardLink } from './IComponent.model'

export class Action implements IComponent {
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
    
    constructor(message: any){
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
}