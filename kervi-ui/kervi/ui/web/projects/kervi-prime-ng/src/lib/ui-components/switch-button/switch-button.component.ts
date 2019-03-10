// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, Output, ElementRef, ViewEncapsulation, EventEmitter } from '@angular/core';
import { DashboardSizes, KerviValueType, BooleanValue } from 'kervi-js'
@Component({
  selector: 'kervi-switchbutton',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.scss'],
})
export class SwitchButtonComponent implements OnInit {
  @Input() value: KerviValueType<BooleanValue>;
  @Input() linkParameters:any;
  @Input() inline:boolean = false;
  @Input() dashboardSizes:DashboardSizes = new DashboardSizes();
  public width:string;
  public height:string;
  constructor() { }
  
  ngOnInit() {
    console.log("sb", this.value);
    if (this.linkParameters){
      
      if (!this.linkParameters.buttonWidth)
        this.width = this.dashboardSizes.switchWidth;
      else
        this.width = this.linkParameters.buttonWidth;

      if (!this.linkParameters.buttonHeight)
        this.height = this.dashboardSizes.switchHeight;
      else
        this.height = this.linkParameters.buttonHeight;

    } else{
      this.width = this.dashboardSizes.switchWidth;
      this.height = this.dashboardSizes.switchHeight;
    }

    var onText= this.linkParameters && this.linkParameters.onIcon ? "<i class='fa fa-" + this.linkParameters.onIcon + "'></i> " : ""; 
    var offText= this.linkParameters && this.linkParameters.offIcon ? "<i class='fa fa-" + this.linkParameters.offIcon + "'></i> " : ""; 
    
    onText+= this.linkParameters && this.linkParameters.onText ? this.linkParameters.onText : ""; 
    offText+= this.linkParameters && this.linkParameters.offText ? this.linkParameters.offText : ""; 

  }
}
