// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { DynamicStringModel } from '../../models/dynamicValues.model';
import { KerviService } from '../../kervi.service'
import { DashboardSectionModel, DashboardSizes } from '../../models/dashboard.model'

declare var jQuery:any;
@Component({
	selector: 'dynamic-value-string',
	templateUrl: './string-value.component.html',
	styleUrls: ['./string-value.component.scss']
})
export class DynamicStringComponent implements OnInit {
	@Input() input: DynamicStringModel;
	@Input() dashboardSection: DashboardSectionModel;
	@Input() parameters:any;
	@Input() inline:boolean = false;
	@Input() defaultSizes:DashboardSizes = new DashboardSizes();
	
	constructor(private kerviService: KerviService, private elementRef: ElementRef) { }

	ngOnInit(){
		var self=this;
		if (!this.parameters)
			  this.parameters = this.input.ui;
			  
		if (self.input.isInput){
		}
		this.input.value$.subscribe(function(v){
			jQuery("input", self.elementRef.nativeElement).val(v).change();
		})
	}

	onChange(event){
		console.log("evv",event);
		this.kerviService.spine.sendCommand(this.input.command, event.target.value);
	}
}
