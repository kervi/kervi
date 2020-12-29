// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, Output, ElementRef, EventEmitter} from '@angular/core';
import { DashboardSizes } from 'kervi-js'
import { BehaviorSubject } from 'rxjs';
//declare var jQuery: any;
//declare var Colors: any;
@Component({
  selector: 'kervi-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
})
export class ColorComponent implements OnInit {
    public colorValue:string;
    @Input() set color(v:string){
        console.log("cc", v, this.picker);
        
        if (v){
            this.colorValue = v;
        }
    
            
  };
  @Output() colorChange = new EventEmitter()
  @Input() linkParameters:any;
  @Input() inline:boolean = false;
  @Input() dashboardSizes:DashboardSizes = new DashboardSizes();
  private width:string;
  private height:string;
  private state:any;
  private rgbString:string;
  private picker:any = null;
  private moveDelayTimer = null;
  
  constructor() { }
    
  ngOnInit() {
    var self = this;
    if (!self.linkParameters.buttonWidth)
        this.width = this.dashboardSizes.switchWidth;
    else
        this.width = self.linkParameters.buttonWidth;
    
    if (this.linkParameters.isInput){
        
    }
  }

  public onChangeColor(color: string) {
    const self = this;
    if (self.moveDelayTimer) {
        clearTimeout(self.moveDelayTimer);
    }
    self.moveDelayTimer = setTimeout(function () {
        self.colorChange.emit(color);
    }, 200);
  }

}
