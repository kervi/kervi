// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, Output, ElementRef, ViewEncapsulation, EventEmitter } from '@angular/core';
import { DashboardSizes } from 'kervi-js'
declare var jQuery: any;

@Component({
  selector: 'kervi-switchbutton',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SwitchButtonComponent implements OnInit {
  private isReady = false;
  @Input() set value(value: boolean){
    this.state = value;
    if (this.isReady){
      if (value)
        jQuery('input',this.elementRef.nativeElement).bootstrapToggle('on')
      else
        jQuery('input', this.elementRef.nativeElement).bootstrapToggle('off')
    }
  };
  @Input() linkParameters:any;
  @Input() inline:boolean = false;
  @Input() dashboardSizes:DashboardSizes = new DashboardSizes();
  @Output() buttonState = new EventEmitter()
  state:boolean = false
  public valueSubscription: any;
  public width:string;
  public height:string;
  constructor(private elementRef: ElementRef) { }

  public press() {
    this.buttonState.emit(true);
     //this.kerviService.spine.sendCommand(this.value.command, true);
  }

  public release() {
    this.buttonState.emit(false);
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

    setTimeout(function () {
        jQuery('input', self.elementRef.nativeElement).bootstrapToggle({
          'on': onText,
          'off': offText,
          'onstyle': "on",
          'offstyle': "off",
          "width":self.width,
          "height":self.height
        })

        if (self.state)
          jQuery('input', self.elementRef.nativeElement).bootstrapToggle('on')
        else
          jQuery('input', self.elementRef.nativeElement).bootstrapToggle('off')

        jQuery('input', self.elementRef.nativeElement).change(function () {
          var state = jQuery('input', self.elementRef.nativeElement).prop('checked');
          if (state && !self.state)
            self.buttonState.emit(true);
          else if (!state && self.state)
            self.buttonState.emit(false);
        });

      self.isReady = true;
      
    }, 0);
  }
}
