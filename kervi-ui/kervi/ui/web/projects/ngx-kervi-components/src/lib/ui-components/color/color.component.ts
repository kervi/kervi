// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, Output, ElementRef, EventEmitter} from '@angular/core';
import { DashboardSizes } from 'kervi-js'
import { BehaviorSubject } from 'rxjs';
declare var jQuery: any;
declare var Colors: any;
@Component({
  selector: 'kervi-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
})
export class ColorComponent implements OnInit {
    public colorValue:string;
    @Input() set color(v:string){
        console.log("cc", v, this.picker);
        this.colorValue = v;
        if (v){
        //    jQuery('.color', this.elementRef.nativeElement).css("background-color", v)
        //else
            jQuery('.color', this.elementRef.nativeElement).attr("style","background-color:" + v)
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
  
  constructor(private elementRef: ElementRef) { }
    
  ngOnInit() {
    var self = this;
    if (!self.linkParameters.buttonWidth)
        this.width = this.dashboardSizes.switchWidth;
    else
        this.width = self.linkParameters.buttonWidth;

    
    if (this.linkParameters.isInput){
        setTimeout(() => {
            self.picker = jQuery('.color', self.elementRef.nativeElement).colorPicker({
                //color: 'rgba(255,12,14,1)',
                cssAddon: '.cp-color-picker {z-index:2000}',
                buildCallback:function(b){
                },
                positionCallback:function(p){
                },
                renderCallback: function(v){
                    var value = v.text;
                    if (value.indexOf("rgb")==0){
                        var rgb = v.text.split( ',' ) ;
                        var r=parseInt( rgb[0].substring(4));
                        var g=parseInt( rgb[1]);
                        var b=parseInt( rgb[2]);
                        value = "#" +r.toString(16)+g.toString(16)+b.toString(16);
                    }
                    console.log("cc", value);
                    self.colorChange.emit(value);
                },
                actionCallback: function(v,x){
                    console.log("c", v, x)
                }
        
            });    
        }, 0);
    }
  }
}
