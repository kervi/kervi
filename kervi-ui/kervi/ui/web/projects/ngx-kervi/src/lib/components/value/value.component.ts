// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { KerviValue, DashboardSection, DashboardSizes } from 'kervi-js';
import { NGXKerviService } from '../../ngx-kervi.service'

@Component({
	selector: 'kervi-value',
	templateUrl: './value.component.html',
	styleUrls: ['./value.component.scss']
})
export class KerviValueComponent implements OnInit {
	@Input() valueId:string=null;
	@Input() value: KerviValue=null;
	@Input() dashboardSection: DashboardSection;
	@Input() linkParameters:any;
	@Input() defaultSizes:DashboardSizes = new DashboardSizes();

	
	constructor(private kerviService: NGXKerviService, private elementRef: ElementRef) { 
		//console.log("cnio",this);
	}

	ngOnInit() {
		if (this.value== null && this.valueId)
			this.value = this.kerviService.getComponent(this.valueId) as KerviValue;
		if (!this.linkParameters)
      		this.linkParameters = this.value.ui;
	}
}
