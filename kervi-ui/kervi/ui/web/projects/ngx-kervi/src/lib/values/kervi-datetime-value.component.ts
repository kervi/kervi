// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component } from '@angular/core';
import { DateTimeValue } from 'kervi-js';
import { KerviValueComponent } from './value.component'

@Component({
	selector: 'kervi-value-datetime-base',
	template: ''
})
export class KerviDateTimeComponent extends KerviValueComponent<DateTimeValue> {
	public displayType:string="datetime";
	public dateTimeFormat:string;
	constructor(){ 
		super();
	}



	public setKerviValue(value){
		this.value.set(value);
	}

	public ngOnInitDateTime() {
		this.ngOnInitValue();
		var self = this;
		
		if (this.linkParameters.type){
			this.displayType = this.linkParameters.type
		}
		
		if (!this.inline && this.linkParameters.inline){
			this.inline = true;
		}

		if (self.linkParameters.type=="time")
        	this.dateTimeFormat = this.kerviService.application$.value.display.unit_system.datetime.time;
      	else if (self.linkParameters.type=="date")
        	this.dateTimeFormat = self.kerviService.application$.value.display.unit_system.datetime.date;
      	else
        	this.dateTimeFormat = this.kerviService.application$.value.display.unit_system.datetime.datetime;
      
	}
}
