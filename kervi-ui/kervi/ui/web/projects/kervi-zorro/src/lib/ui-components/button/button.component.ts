// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DashboardSizes, BooleanValue } from 'kervi-js';
import { BehaviorSubject } from 'rxjs';

declare var jQuery:any;
@Component({
  selector: 'kervi-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})

export class ButtonComponent implements OnInit {
  @Input() value: BooleanValue;
  @Input() linkParameters: any = null;
  @Input() type: string;
  @Input() inline:boolean = false;
  @Input() dashboardSizes:DashboardSizes = new DashboardSizes();
  @Input() title:string;
  @Output() buttonState = new EventEmitter();
  public width:string;
  public height:string;
  
  constructor() {  
  }
 
  ngOnInit() {
    var self = this; 
    if (self.linkParameters){
      
      if (!self.linkParameters.buttonWidth)
        this.width = this.dashboardSizes.buttonWidth;
      else
        this.width = self.linkParameters.buttonWidth;

      if (!self.linkParameters.buttonHeight)
        this.height = this.dashboardSizes.buttonHeight;
      else
        this.height = self.linkParameters.buttonHeight;

    } else{
      this.width = this.dashboardSizes.buttonWidth;
      this.height = this.dashboardSizes.buttonHeight;
    }
  }

  public confirm() {
    console.log("c", this.value);
    this.buttonState.emit(true);
    this.buttonState.emit(false);
  }

  public press() {

    console.log("p", this.value);
    this.buttonState.emit(true);
  }

  public release() {
    this.buttonState.emit(false);
  }
}