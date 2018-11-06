// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input, Output, EventEmitter, OnInit, ElementRef } from '@angular/core';
import { DashboardSizes, NumberValue } from 'kervi-js'
import { KerviTemplateService } from 'ngx-kervi'
declare var jQuery: any;

@Component({
	selector: 'ui-slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
	@Input() value: NumberValue;
	@Input() type: string = "horizontal_slider";
    @Input() tick:number;
	@Input() linkParameters:any;
	@Input() defaultSizes:DashboardSizes = new DashboardSizes();
	@Output() kerviValueChange = new EventEmitter();
	private moveDelayTimer = null;
	private inSlide:boolean=false;

	constructor(private elementRef: ElementRef, private templateService:KerviTemplateService) { 
		//console.log("cnio",this);
	}

	 private color(style,selector){
    	return this.templateService.getColor(style,selector);
  	}

	ngOnInit() {
		var self = this;
		
		
		var	color = this.color("color",".number-gauge-template");
		setTimeout(function() {
			
			jQuery('input', self.elementRef.nativeElement).bootstrapSlider({
				tooltip: "hide",
				min:self.value.minValue,
				max:self.value.maxValue,
				step:self.tick,
				orientation: self.type == "horizontal_slider" ? "horizontal" : "vertical"
			});

			jQuery('.slider', self.elementRef.nativeElement).on("change",function(e,x){
				
				console.log("slsv", e, x);
				if (e.value.newValue)
					self.value.set(e.value.newValue);
			});

			jQuery('.slider', self.elementRef.nativeElement).on("slideStart",function(e){
				self.inSlide=true;
			});

			jQuery('.slider', self.elementRef.nativeElement).on("slideStop",function(e){
				self.inSlide=false;
			});
			
			self.value.value$.subscribe(function (v) {
				console.log("sv", v, self.inSlide);
				if (v && !self.inSlide) {
					jQuery("input", self.elementRef.nativeElement).bootstrapSlider('setValue',v);
					//jQuery(".slider-value", self.elementRef.nativeElement).html(e.value.newValue);
				}
			});
		},0);
	}

	step(v){
		this.value.set(this.value.value$.value + v);
	}
}
