// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input } from '@angular/core';
import { DashboardSizes } from 'kervi-js';
import { BehaviorSubject } from 'rxjs';

declare var jQuery:any;
@Component({
  selector: 'kervi-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})

export class ButtonComponent implements OnInit {
  @Input() value: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  @Input() linkParameters: any = null;
  @Input() type: string;
  //@Input() size:number;
  @Input() inline:boolean = false;
  @Input() dashboardSizes:DashboardSizes = new DashboardSizes();
  //@Input() parent:any;
  @Input() title:string;
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

  public press() {
    console.log("x")
    //this.parent.press();
    //this.kerviService.spine.sendCommand(this.value.command, true);
  }

  public release() {
    //this.parent.release();
    //this.kerviService.spine.sendCommand(this.value.command, false);
  }
}