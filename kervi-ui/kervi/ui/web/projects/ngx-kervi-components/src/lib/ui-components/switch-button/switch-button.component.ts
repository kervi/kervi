// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ElementRef, ViewEncapsulation } from '@angular/core';
import { DashboardSizes } from 'kervi-js'
import { BehaviorSubject } from 'rxjs';
declare var jQuery: any;

@Component({
  selector: 'kervi-switchbutton',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SwitchButtonComponent implements OnInit {
  @Input() value: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  @Input() linkParameters:any;
  @Input() inline:boolean = false;
  @Input() dashboardSizes:DashboardSizes = new DashboardSizes();
  state:boolean = false
  public valueSubscription: any;
  public width:string;
  public height:string;
  constructor(private elementRef: ElementRef) { }

  public press() {
    //this.parent.press()
     //this.kerviService.spine.sendCommand(this.value.command, true);
  }

  public release() {
    //this.parent.release() 
    //this.kerviService.spine.sendCommand(this.value.command, false);
  }

  ngOnInit() {
    var self = this;

    if (!this.linkParameters){
    //  this.parameters = this.value.ui;

    if (!self.linkParameters.buttonWidth)
      this.width = this.dashboardSizes.switchWidth;
    else
      this.width = self.linkParameters.buttonWidth;

    if (!self.linkParameters.buttonHeight)
      this.height = this.dashboardSizes.switchHeight;
    else
      this.height = self.linkParameters.buttonHeight;

  } else{
    this.width = this.dashboardSizes.switchWidth;
    this.height = this.dashboardSizes.switchHeight;
  }

    var onText= this.linkParameters && this.linkParameters.onIcon ? "<i class='fa fa-" + this.linkParameters.onIcon + "'></i> " : ""; 
    var offText= this.linkParameters && this.linkParameters.offIcon ? "<i class='fa fa-" + this.linkParameters.offIcon + "'></i> " : ""; 
    
    onText+= this.linkParameters && this.linkParameters.onText ? this.linkParameters.onText : ""; 
    offText+= this.linkParameters && this.linkParameters.offText ? this.linkParameters.offText : ""; 

    self.valueSubscription = self.value.subscribe(function (v) {
      self.state = v;
      if (v)
        jQuery('input', self.elementRef.nativeElement).bootstrapToggle('on')
      else
        jQuery('input', self.elementRef.nativeElement).bootstrapToggle('off')
    });

    

    setTimeout(function () {
        jQuery('input', self.elementRef.nativeElement).bootstrapToggle({
          'on': onText,
          'off': offText,
          'onstyle': "on",
          'offstyle': "off",
          "width":self.width,
          "height":self.height
        })

        if (self.value.value)
          jQuery('input', self.elementRef.nativeElement).bootstrapToggle('on')
        else
          jQuery('input', self.elementRef.nativeElement).bootstrapToggle('off')

        jQuery('input', self.elementRef.nativeElement).change(function () {
          var state = jQuery('input', self.elementRef.nativeElement).prop('checked');
          console.log("z", state, self.value.value);
          if (state && !self.value.value)
            self.press()
          else if (!state && self.value.value)
            self.release();
        });
      
    }, 0);
  }
}
