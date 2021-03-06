// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { DashboardSizes, NumberValue, ValueRange, ValueRangeType } from 'kervi-js';
import { KerviTemplateService } from 'ngx-kervi';
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
  @Input() value: NumberValue = null;
  @Input() linkParameters: any = null;
  @Input() type: string = "radial_gauge";
  @Input() dashboardSizes: DashboardSizes;
  protected  unitSize:number = 110;
  public numberFormat = "1.2-2";
  canvasId:string="";
  dataHighlights:any={};
  private gauge:any=null;
  private gaugeTypes:string[]=['radial_gauge','vertical_linear_gauge', 'horizontal_linear_gauge', 'compass']
  constructor(private elementRef:ElementRef, private templateService:KerviTemplateService ) {  
  }

  private color(style,selector){
    return this.templateService.getColor(style,selector);
  }

  

  ngOnInit() {
    var self = this;  
   

    this.numberFormat = this.linkParameters.minIntegerDigits + "." + this.linkParameters.minFractionDigits + "-" + this.linkParameters.maxFractionDigits
			
    this.canvasId=this.templateService.makeId();
    
    var warningColor = this.color("color",".sensor-template .sensor-warning");
    var fatalColor = this.color("color",".sensor-template .sensor-fatal");
    var normalColor = this.color("color",".sensor-template .sensor-major-ticks");
    
    var fromLimit=self.value.minValue;
    
    this.dataHighlights[self.value.minValue]={color:normalColor}
    for(var range of self.value.ranges){
      if (range.type == ValueRangeType.error)
        this.dataHighlights[range.start]={color: fatalColor};
      else if (range.type == ValueRangeType.warning)
        this.dataHighlights[range.start]={color:warningColor};
      else
        this.dataHighlights[range.start]={color:normalColor};
      this.dataHighlights[range.end]={color:normalColor}
    }
      console.log("dr", self.value.ranges, this.dataHighlights);
      var nspan=(self.value.maxValue-self.value.minValue);
      var tickSpan=nspan/10;
      var ticks=[];
      for(var n=self.value.minValue;(n<=self.value.maxValue);n+=tickSpan)
        ticks.push(n);

      var settings={
          renderTo: self.canvasId,
          value:self.value.value$.value,
          units: self.value.unit,
          title: self.linkParameters.label,
          minValue: self.value.minValue,
          maxValue: self.value.maxValue,
          highlights: this.dataHighlights,
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
      
      
      
   
    
  }
  
}