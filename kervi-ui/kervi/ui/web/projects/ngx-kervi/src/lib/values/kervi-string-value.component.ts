// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component } from '@angular/core';
import { StringValue } from 'kervi-js';
import { KerviValueComponent } from './value.component'

@Component({
	selector: 'kervi-value-string-base',
	template: ''
})
export class KerviStringComponent extends KerviValueComponent<StringValue> {
	public displayType:string="";
	
	constructor(){ 
		super();
	}

	public setKerviValue(value){
		this.value.set(value);
	}

	public ngOnInitString() {
		this.ngOnInitValue();
		var self = this;
		
		if (this.linkParameters.type){
			this.displayType = this.linkParameters.type
		}
		
		if (!this.inline && this.linkParameters.inline){
			this.inline = true;
		}
	}
}
