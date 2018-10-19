// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { DynamicNumberModel, DynamicRange, DynamicRangeType  } from '../../models/dynamicValues.model';
import { DashboardSectionModel, DashboardSizes } from '../../models/dashboard.model';
import { KerviService } from '../../kervi.service';
import { TemplateService } from '../../template.service';
declare var LinearGauge:any;
declare var RadialGauge:any;
declare var jQuery:any;
@Component({
  selector: 'kervi-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class GaugeComponent implements OnInit {
  @Input() value: DynamicNumberModel = null;
  @Input() parameters: any = null;
  @Input() type: string = "radial_gauge";
  @Input() size:number;
  @Input() defaultSizes:DashboardSizes = new DashboardSizes();
  private  unitSize:number = 110;
  canvasId:string="";

  private gauge:any=null;
  private gaugeTypes:string[]=['radial_gauge','vertical_linear_gauge', 'horizontal_linear_gauge', 'compass']
  constructor(private kerviService:KerviService, private elementRef:ElementRef, private templateService:TemplateService ) {  
  }

  private color(style,selector){
    return this.templateService.getColor(style,selector);
  }

  

  ngOnInit() {
    var self = this;  
   

    
    this.canvasId=this.templateService.makeId();
    if (this.gaugeTypes.indexOf(this.type)>-1){
      
      
      this.value.value$.subscribe(function(v){
        if (self.gauge)
          self.gauge.update({value:v});

      });

      var warningColor=this.color("color",".sensor-template .sensor-warning");
      var fatalColor=this.color("color",".sensor-template .sensor-fatal");

      var dataHighlights=[];
      var fromLimit=self.value.minValue;
      
      for(var range of self.value.ranges){
        if (range.type == DynamicRangeType.error)
          dataHighlights.push({"from": range.start, "to": range.end, "color": fatalColor})
        if (range.type == DynamicRangeType.warning)
          dataHighlights.push({"from": range.start, "to": range.end, "color": warningColor})
      }
      
      var nspan=(self.value.maxValue-self.value.minValue);
      var tickSpan=nspan/10;
      var ticks=[];
      for(var n=self.value.minValue;(n<=self.value.maxValue);n+=tickSpan)
        ticks.push(n);

      var settings={
          renderTo: self.canvasId,
          value:self.value.value$.value,
          units: self.value.unit,
          title: self.parameters.label,
          minValue: self.value.minValue,
          maxValue: self.value.maxValue,
          highlights: dataHighlights,
          majorTicks:ticks,
          colorPlate:this.color("background-color",".sensor-template"),
          borders:false,
          //colorBorderOuter:"",
          //colorBorderMiddle:"",
          //colorBorderInner:"",
          colorMajorTicks:this.color("color",".sensor-template .sensor-major-ticks"),
          colorMinorTicks:this.color("color",".sensor-template .sensor-minor-ticks"),
          colorTitle:this.color("color",".sensor-template .sensor-title"),
          colorUnits:this.color("color",".sensor-template .sensor-units"),
          colorNumbers:this.color("color",".sensor-template .sensor-numbers"),
          colorNeedleStart:this.color("color",".sensor-template .sensor-needle-start"),
          colorNeedleEnd:this.color("color",".sensor-template .sensor-needle-end"),
          valueBox:false,
          animationRule:"bounce",
          animationDuration:"500",
          fontValue:"Led",
          animatedValue:"true"
      }
      
      
      setTimeout(function() {
        var container = jQuery(self.elementRef.nativeElement).closest(".card-body");
        var containerWidth = jQuery(container).width();
        var containerHeight = jQuery(container).height();
        
        var width = self.parameters.width;
        if (width === 0){
          width = self.defaultSizes.gaugeWidth;  
        }
        width = self.templateService.getPixels(width, containerWidth);

        var height = self.parameters.height;
        if (height === 0){
          if (self.type=="radial_gauge")
            height = self.defaultSizes.gaugeWidth;
          else
            height = self.defaultSizes.gaugeHeight;  
        } 
        height = self.templateService.getPixels(height, containerHeight);

        if (self.type=="radial_gauge"){


          
          settings["width"]= width;
          settings["height"]= height;
          self.gauge = new RadialGauge(settings).draw();
        }

        if (self.type=="vertical_linear_gauge"){
          settings["colorBarProgress"]= self.color("color",".sensor-template .sensor-bar-progress"),
          settings["colorBar"]= self.color("color",".sensor-template .sensor-bar"),
          settings["borders"]=false;
          settings["needleType"]="arrow";
          settings["needleWidth"]="2";
          settings["needleCircleSize"]="7";
          settings["needleCircleOuter"]="true";
          settings["needleCircleInner"]="false";
          settings["animationDuration"]="1500";
          settings["animationRule"]="linear";
          settings["barWidth"]="10";
          settings["barBeginCircle"]=false;
          //settings["numberSide"]="left";

          

          settings["width"]= width;
          settings["height"]= height;
          self.gauge = new LinearGauge(settings).draw();
        }

        if (self.type=="horizontal_linear_gauge"){
          settings["colorBarProgress"]= self.color("color",".sensor-template .sensor-bar-progress"),
          settings["colorBar"]= self.color("color",".sensor-template .sensor-bar"),
          settings["borders"]=false;
          settings["needleType"]="arrow";
          settings["needleWidth"]="2";
          settings["needleCircleSize"]="7";
          settings["needleCircleOuter"]="true";
          settings["needleCircleInner"]="false";
          settings["animationDuration"]="1500";
          settings["animationRule"]="linear";
          settings["barWidth"]="10";
          settings["barBeginCircle"]=false;

          settings["width"]= height;
          settings["height"]= width;
          
          self.gauge = new LinearGauge(settings).draw();
        }

        
      }, 0);
    }

   
    
  }
  
}