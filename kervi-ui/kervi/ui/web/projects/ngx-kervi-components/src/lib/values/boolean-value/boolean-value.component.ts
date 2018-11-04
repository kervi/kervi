// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { KerviBooleanComponent, } from 'ngx-kervi';

@Component({
	selector: 'kervi-value-boolean',
	templateUrl: './boolean-value.component.html',
	styleUrls: ['./boolean-value.component.scss']
	//directives: [ CommonModule  ],
})
export class DynamicBooleanComponent extends KerviBooleanComponent implements OnInit {
	
	constructor() { 
		super();
	}

	ngOnInit() {
		var self = this;
		if (!this.parameters)
      		this.parameters = this.value.ui;

		if (this.parameters){
			if (this.parameters.type){
				this.displayType = this.parameters.type
            }
			if (this.parameters.size)
				this.size=this.parameters.size;
			
			if (!this.inline && this.parameters.inline){
				this.inline = true;
			}else if (!this.inline && this.parameters.size > 0)
			{
				this.inline = true;
			}
        }

		if (this.dashboardSection){
			this.unitSize=this.dashboardSection.dashboard.unitSize;

		}

		if (self.value.isInput){
			var sliderSize=self.unitSize*self.size;
			if (self.size==0)
				sliderSize=self.unitSize;
		}

		
	}

	public press() {
		 this.kerviService.spine.sendCommand(this.value.command, true);
	  }
	
	  public release() {
		this.kerviService.spine.sendCommand(this.value.command, false);
	  }

}
