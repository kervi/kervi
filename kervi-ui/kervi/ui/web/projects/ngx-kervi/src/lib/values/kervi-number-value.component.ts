// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { NumberValue } from 'kervi-js';
import { KerviValueComponent } from './value.component'
declare var Qty: any;

@Component({
	selector: 'kervi-value-number-base',
	template: ''
})
export class KerviNumberComponent extends KerviValueComponent<NumberValue> implements OnInit {
	private moveDelayTimer = null;
	private inSlide:boolean=false;
	private numberFormat = "1.2-2";
	displayValue:number = 0;
	displayUnit:string = "";
	displayType:string="";
	gaugeType:string;
	currentIcon:string=null;
	private gaugeTypes:string[]=['radial_gauge','vertical_linear_gauge', 'horizontal_linear_gauge', 'compass']
	private slideTypes:string[]=['horizontal_slider','vertical_slider']

	constructor(){ 
		super();
	}

	ngOnInit() {
		this.ngOnInitValue();
		var self = this;
		
		if (this.linkParameters){
			this.numberFormat = this.linkParameters.minIntegerDigits + "." + this.linkParameters.minFractionDigits + "-" + this.linkParameters.maxFractionDigits
			if (!this.linkParameters.valueIcon)
				this.currentIcon = null;
			else if (typeof(this.linkParameters.valueIcon) == "string" )
				this.currentIcon = this.linkParameters.valueIcon;
			else {
				this.value.value$.subscribe(function(v){
					for(let iconSection of self.linkParameters.valueIcon){
						if (v >= iconSection.range[0] && v <= iconSection.range[1]){
							self.currentIcon = iconSection.icon;
							break;
						}
					}
				})
			}		

			if (this.linkParameters.type){
				if (this.gaugeTypes.indexOf(this.linkParameters.type) > -1 ){
					this.displayType = "gauge";
					this.gaugeType = this.linkParameters.type;
				} else if (this.linkParameters.type=="chart"){
					this.displayType="chart"
				}
			}

			if (!this.inline && this.linkParameters.inline){
				this.inline = true;
			}else if (!this.inline && this.linkParameters.size > 0)
			{
				this.inline = true;
			}
		}

		if (!this.displayType){
			if (this.value.isInput)
				this.displayType="slider"
			else
				this.displayType="value"
		}
	}
}
