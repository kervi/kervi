// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input, Output, EventEmitter, OnInit, ElementRef } from '@angular/core';
import { DashboardSizes } from 'kervi-js'
import { KerviTemplateService } from 'ngx-kervi'
declare var jQuery: any;

@Component({
  selector: 'ui-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() value = 0;
  @Input() type = "horizontal_slider";
  @Input() tick: number;
  @Input() linkParameters: any;
  @Input() defaultSizes: DashboardSizes = new DashboardSizes();
  @Input() maxValue: number;
  @Input() minValue: number;
  @Output() sliderChanged = new EventEmitter();

  private marks = {};

  constructor(private elementRef: ElementRef, private templateService:KerviTemplateService) { 
    //console.log("cnio",this);
  }

  private color(style,selector){
    return this.templateService.getColor(style,selector);
  }

  ngOnInit() {
    var self = this;

  }

}
