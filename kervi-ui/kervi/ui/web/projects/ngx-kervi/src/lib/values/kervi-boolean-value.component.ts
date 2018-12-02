// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component } from '@angular/core';
import { BooleanValue } from 'kervi-js';
import { KerviValueComponent } from './value.component'

@Component({
	selector: 'kervi-value-boolean-base',
	template: ''
})
export class KerviBooleanComponent extends KerviValueComponent<BooleanValue> {
	public displayType:string="switch";
	
	constructor(){ 
		super();
	}

	public setKerviValue(value){
		this.value.set(value);
	}

	ngOnInitBoolean() {
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
