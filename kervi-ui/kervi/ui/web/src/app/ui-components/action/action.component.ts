// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ActionModel } from '../../models/action.model';
import { DashboardSectionModel, DashboardSizes  } from '../../models/dashboard.model';
import { KerviService } from '../../kervi.service';
import { TemplateService } from '../../template.service';
import { DynamicBooleanModel } from 'app/models/dynamicValues.model';
import { BehaviorSubject } from 'rxjs/Rx';

@Component({
  selector: 'kervi-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ActionComponent implements OnInit {
    @Input() action: ActionModel = null;
    @Input() parameters: any = null;
    @Input() dashboardSection: DashboardSectionModel = null;
    @Input() inline:boolean = false;
    @Input() defaultSizes:DashboardSizes = new DashboardSizes();
    private size:number = 0;
    private unitSize:number=150;
    private state: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private actionParameters: any = null;
    private interruptParameters:any = null;
	displayType:string="switch";
  constructor(private kerviService:KerviService, private templateService:TemplateService ) { 
    
  }

  ngOnInit() {
    var self = this;
    if (!this.parameters)
          this.parameters = this.action.ui;

    if (this.parameters){
        if (this.parameters.type){
            this.displayType = this.parameters.type
        }
        if (this.parameters.size)
            this.size=this.parameters.size;
        
        if (!this.inline && this.parameters.inline){
            this.inline = true;
        }else if (!this.inline && this.parameters.size > 0)
        {
            this.inline = true;
        }
    }
    self.state.next(this.action.running$.value);
    this.action.running$.subscribe(function(v){
        self.state.next(v);
    })
  }

  public press() {
    if (!this.action.running$.value)
        if (this.parameters.actionParameters)
            this.kerviService.spine.sendCommand(this.action.runCommand, ...this.parameters.actionParameters);
        else
            this.kerviService.spine.sendCommand(this.action.runCommand);
  }

  public release() {
    if (this.action.running$.value && this.action.interruptCommand)
        if (this.parameters.interruptParameters)
            this.kerviService.spine.sendCommand(this.action.interruptCommand, ...this.parameters.interruptParameters);    
        else
            this.kerviService.spine.sendCommand(this.action.interruptCommand);    
  }
  
}