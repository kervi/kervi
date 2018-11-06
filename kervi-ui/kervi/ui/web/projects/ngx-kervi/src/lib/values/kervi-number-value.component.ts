// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component } from '@angular/core';
import { NumberValue } from 'kervi-js';
import { KerviValueComponent } from './value.component'

@Component({
	selector: 'kervi-value-number-base',
	template: ''
})
export class KerviNumberComponent extends KerviValueComponent<NumberValue> {
	public numberFormat = "1.2-2";
	public displayValue:number = 0;
	public displayUnit:string = "";
	public displayType:string="";
	public currentIcon:string=null;
	
	constructor(){ 
		super();
	}

	public setKerviValue(value){
		this.value.set(value);
	}

	ngOnInitNumber() {
		this.ngOnInitValue();
		var self = this;
		
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

		if (!this.inline && this.linkParameters.inline){
			this.inline = true;
		}else if (!this.inline && this.linkParameters.size > 0)
		{
			this.inline = true;
		}
	}
}
