// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { DynamicNumberModel } from '../../models/dynamicValues.model';
import { KerviService } from '../../kervi.service'
import { TemplateService } from '../../template.service'
import { DashboardSectionModel, DashboardSizes } from '../../models/dashboard.model'

declare var jQuery: any;

@Component({
	selector: 'ui-slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
	@Input() value: DynamicNumberModel;
    @Input() type: string = "horizontal_slider";
    @Input() tick:number;
	@Input() parameters:any;
	@Input() defaultSizes:DashboardSizes = new DashboardSizes();
	private moveDelayTimer = null;
	private size:number = 0;
	private unitSize:number=110;
	private inSlide:boolean=false;

	constructor(private kerviService: KerviService, private elementRef: ElementRef, private templateService:TemplateService) { 
		//console.log("cnio",this);
	}

	 private color(style,selector){
    	return this.templateService.getColor(style,selector);
  	}

	ngOnInit() {
		var self = this;
		
		var sliderSize=self.unitSize*self.size;
		if (self.size==0)
			sliderSize=self.unitSize;

		var	color = this.color("color",".number-gauge-template");
		setTimeout(function() {
			
			jQuery('input', self.elementRef.nativeElement).bootstrapSlider({
				tooltip: "hide",
				min:self.value.minValue,
				max:self.value.maxValue,
				step:self.tick,
				orientation: self.type == "horizontal_slider" ? "horizontal" : "vertical"
			});
			

			jQuery('.slider', self.elementRef.nativeElement).on("change",function(e){
				self.kerviService.spine.sendCommand(self.value.command,e.value.newValue);
				jQuery(".slider-value", self.elementRef.nativeElement).html(e.value.newValue);
			});

			jQuery('.slider', self.elementRef.nativeElement).on("slideStart",function(e){
				self.inSlide=true;
			});

			jQuery('.slider', self.elementRef.nativeElement).on("slideStop",function(e){
				self.inSlide=false;

			});

			self.value.value$.subscribe(function (v) {
				
				if (!self.inSlide) {
					jQuery("input", self.elementRef.nativeElement).bootstrapSlider('setValue',v);
					//jQuery(".slider-value", self.elementRef.nativeElement).html(e.value.newValue);
				}
				
			});
		},0);
	}

	step(v){
		this.kerviService.spine.sendCommand(this.value.command,this.value.value$.value + v);
	}

}
