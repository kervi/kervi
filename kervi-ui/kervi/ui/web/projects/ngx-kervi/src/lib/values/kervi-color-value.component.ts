// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component } from '@angular/core';
import { ColorValue } from 'kervi-js';
import { KerviValueComponent } from './value.component'

@Component({
	selector: 'kervi-value-color-base',
	template: ''
})
export class KerviColorComponent extends KerviValueComponent<ColorValue> {
	public displayType:string="button";
	
	constructor(){ 
		super();
	}

	public setKerviValue(value){
		this.value.set(value);
	}

	ngOnInitColor() {
		this.ngOnInitValue();
		var self = this;
		
		if (this.linkParameters.type){
			this.displayType = this.linkParameters.type
		}
		
		if (!this.inline && this.linkParameters.inline){
			this.inline = true;
		} else if (!this.inline && this.linkParameters.size > 0)
		{
			this.inline = true;
		}
	}
}
