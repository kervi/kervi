// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { DynamicNumberModel } from '../../models/dynamicValues.model';
import { KerviService } from '../../kervi.service'
import { TemplateService } from '../../template.service'
import { DashboardSectionModel, DashboardSizes } from '../../models/dashboard.model'

declare var Qty: any;

@Component({
	selector: 'dynamic-value-number',
	templateUrl: './number-value.component.html',
	styleUrls: ['./number-value.component.scss']
	//directives: [ CommonModule  ],
})
export class DynamicNumberComponent implements OnInit {
	@Input() input: DynamicNumberModel;
	@Input() dashboardSection: DashboardSectionModel;
	@Input() parameters:any;
	@Input() inline:boolean = false;
	private moveDelayTimer = null;
	private size:number = 0;
	private unitSize:number=150;
	private inSlide:boolean=false;
	private numberFormat = "1.2-2"
	@Input() defaultSizes:DashboardSizes = new DashboardSizes();
	displayValue:number = 0;
	displayUnit:string = "";
	//convert = require("convert");
	displayType:string="";
	gaugeType:string;
	currentIcon:string=null;
	private gaugeTypes:string[]=['radial_gauge','vertical_linear_gauge', 'horizontal_linear_gauge', 'compass']
	private slideTypes:string[]=['horizontal_slider','vertical_slider']
	

	constructor(private kerviService: KerviService, private elementRef: ElementRef, private templateService:TemplateService) { 
		//console.log("cnio",this);
	}

	 private color(style,selector){
    	return this.templateService.getColor(style,selector);
  	}

	ngOnInit() {
		var self = this;
		if (!this.parameters)
      		this.parameters = this.input.ui;

		if (this.parameters){
			this.numberFormat = this.parameters.minIntegerDigits + "." + this.parameters.minFractionDigits + "-" + this.parameters.maxFractionDigits
			if (!this.parameters.valueIcon)
				this.currentIcon = null;
			else if (typeof(this.parameters.valueIcon) == "string" )
				this.currentIcon = this.parameters.valueIcon;
			else {
				this.input.value$.subscribe(function(v){
					for(let iconSection of self.parameters.valueIcon){
						if (v >= iconSection.range[0] && v <= iconSection.range[1]){
							self.currentIcon = iconSection.icon;
							break;
						}
					}
				})
			}		

			if (this.parameters.type){
				if (this.gaugeTypes.indexOf(this.parameters.type) > -1 ){
					this.displayType = "gauge";
					this.gaugeType = this.parameters.type;
				} else if (this.parameters.type=="chart"){
					this.displayType="chart"
				}
			}

			if (!this.inline && this.parameters.inline){
				this.inline = true;
			}else if (!this.inline && this.parameters.size > 0)
			{
				this.inline = true;
			}
				
			if (this.parameters.size)
				this.size=this.parameters.size;
		}

		if (!this.displayType){
			if (this.input.isInput)
				this.displayType="slider"
			else
				this.displayType="value"
		}

		if (this.dashboardSection){
			this.unitSize=this.dashboardSection.dashboard.unitSize;
		}

		if (self.input.isInput){
			var sliderSize=self.unitSize*self.size;
			if (self.size==0)
				sliderSize=self.unitSize;
		}
	}
}
