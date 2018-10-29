// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { DynamicBooleanModel, DynamicRange, DynamicRangeType  } from '../../models/dynamicValues.model';
import { DashboardSectionModel, DashboardSizes } from '../../models/dashboard.model';
import { KerviService } from '../../kervi.service';
import { TemplateService } from '../../template.service';
import { BehaviorSubject } from 'rxjs/Rx';

declare var jQuery:any;
//declare var Chart:any;
@Component({
  selector: 'kervi-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ButtonComponent implements OnInit {
  @Input() value: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  @Input() parameters: any = null;
  @Input() type: string;
  @Input() size:number;
  @Input() inline:boolean = false;
  @Input() defaultSizes:DashboardSizes = new DashboardSizes();
  @Input() parent:any;
  @Input() title:string;
  private width:string;
  private height:string;
  //private  unitSize:number = 150;
  //state:boolean = false;
  //canvasId:string="";
  //private chart:any=null;
  //private chartData = [];

  constructor(private kerviService:KerviService, private templateService:TemplateService ) {  
  }

  private color(style,selector){
    return this.templateService.getColor(style,selector);
  }

  
  ngOnInit() {



    var self = this; 
    if (self.parameters){
      if (!self.inline && self.parameters.inline)
        self.inline=true;

      if (!self.parameters.buttonWidth)
        this.width = this.defaultSizes.buttonWidth;
      else
        this.width = self.parameters.buttonWidth;

      if (!self.parameters.buttonHeight)
        this.height = this.defaultSizes.buttonHeight;
      else
        this.height = self.parameters.buttonHeight;

    } else{
      this.width = this.defaultSizes.buttonWidth;
      this.height = this.defaultSizes.buttonHeight;
    }
  }

  public press() {
    console.log("x")
    this.parent.press();
    //this.kerviService.spine.sendCommand(this.value.command, true);
  }

  public release() {
    this.parent.release();
    //this.kerviService.spine.sendCommand(this.value.command, false);
  }
}