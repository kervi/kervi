// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ElementRef, ViewEncapsulation } from '@angular/core';
import { KerviService } from '../../kervi.service'
import { DashboardSectionModel, DashboardSizes } from '../../models/dashboard.model'
import { BehaviorSubject } from 'rxjs/Rx';
declare var jQuery: any;
declare var Colors: any;
@Component({
  selector: 'kervi-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ColorComponent implements OnInit {
  @Input() value: BehaviorSubject<string> = new BehaviorSubject<string>("#FFFFFF");
  @Input() dashboardSection: DashboardSectionModel;
  @Input() parameters:any;
  @Input() inline:boolean = false;
  @Input() defaultSizes:DashboardSizes = new DashboardSizes();
  @Input() parent:any;
  private valueSubscription: any;
  private width:string;
  private height:string;
  private state:any;
  private rgbString:string;
  constructor(private kerviService: KerviService, private elementRef: ElementRef) { }
  private picker:any = null;
  
  ngOnInit() {
    var self = this;
    if (!this.parameters){
        if (!self.parameters.buttonWidth)
            this.width = this.defaultSizes.switchWidth;
        else
            this.width = self.parameters.buttonWidth;

        if (!self.parameters.buttonHeight)
            this.height = this.defaultSizes.switchHeight;
        else
            this.height = self.parameters.buttonHeight;

    } else {
        this.width = this.defaultSizes.switchWidth;
        this.height = this.defaultSizes.switchHeight;
    }

    self.valueSubscription = self.value.subscribe(function (v) {
        if (self.picker && this.parent && this.parent.value.ui.isInput)
            jQuery('.color', self.elementRef.nativeElement).css("background-color", v)
        else
            jQuery('.color', self.elementRef.nativeElement).attr("style","background-color:" + v)
        
    });
    if (this.parent.value.ui.isInput){
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
                    if (value)
                        self.parent.color_change(value);
                    
                },
                actionCallback: function(v,x){
                    console.log("c", v, x)
                }
        
            });    
        }, 0);
    }
  }
}
