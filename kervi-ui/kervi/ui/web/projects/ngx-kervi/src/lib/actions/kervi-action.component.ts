// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input } from '@angular/core';
import { Action } from 'kervi-js';
import { DashboardSizes  } from 'kervi-js';
import { NGXKerviService } from '../ngx-kervi.service';
import { BehaviorSubject } from 'rxjs';
import { AppInjector } from '../app-injector.service';

@Component({
  selector: 'kervi-action-base',
  template: '',
  styleUrls: [],
})
export class KerviActionComponent {
    @Input() action: Action = null;
    @Input() linkParameters: any = null;
    @Input() inline:boolean = false;
    @Input() dashboardSizes:DashboardSizes = new DashboardSizes();
    public state: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    protected kerviService:NGXKerviService;
    
	public displayType:string="switch";
    
    constructor() { 
        this.kerviService = AppInjector.get(NGXKerviService);
    }

    ngOnInitAction() {
        var self = this;
        if (!this.linkParameters)
            this.linkParameters = this.action.ui;

        if (this.linkParameters.type){
            this.displayType = this.linkParameters.type
        }
        
        if (!this.inline && this.linkParameters.inline){
            this.inline = true;
        }
    
        self.state.next(this.action.running$.value);
        this.action.running$.subscribe(function(v){
            console.log("ar", self.action.id, v)
            self.state.next(v);
        })
    }

    public setActionState(value){
        if (value)
            this.action.run(this.linkParameters.actionParameters);
        else
            this.action.interrupt(this.linkParameters.interruptParameters)
    }
}