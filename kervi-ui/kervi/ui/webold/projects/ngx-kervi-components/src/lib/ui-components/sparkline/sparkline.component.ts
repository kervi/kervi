// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input, OnInit, ElementRef,ChangeDetectionStrategy } from '@angular/core';
import { DynamicNumberModel} from '../../models/dynamicValues.model'
import { TemplateService } from '../../template.service'

declare var jQuery:any;

@Component({
  selector: 'value-sparkline',
  templateUrl: './sparkline.component.html',
  styleUrls: ['./sparkline.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SparklineComponent implements OnInit {
  @Input() public value:DynamicNumberModel;
  constructor(private elementRef:ElementRef, private templateService:TemplateService) { 

  }

  private color(style,selector){
    	return this.templateService.getColor(style,selector);
  	}

  ngOnInit() {
    var self=this;
    
    var lineColor=self.color("color",".sparkline-template");
    var spotColor=self.color("color",".sparkline-template .spot");
    var fillColor=self.color("background-color",".sparkline-template");
    var height=self.color("height",".sparkline-template");
    var width=self.color("width",".sparkline-template");
    //console.log("sl", width, height);
    this.value.sparkline$.subscribe(function(v){
      
    jQuery(self.elementRef.nativeElement).sparkline(v, { 
        type: 'line', 
        lineColor:lineColor,
        spotColor:spotColor,
        fillColor:fillColor,
        height:height,
        width:width 
      });
    });
  }
}
