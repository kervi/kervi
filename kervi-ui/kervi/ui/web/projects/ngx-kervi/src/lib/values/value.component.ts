// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input, HostListener } from '@angular/core';
import { KerviValue, DashboardPanel, DashboardSizes } from 'kervi-js';
import { NGXKerviService } from '../ngx-kervi.service';
import { AppInjector } from '../app-injector.service';
@Component({
	selector: 'kervi-value-base',
	template: ''
})
export class KerviValueComponent<T extends KerviValue>   {
	@Input() valueId:string=null;
	@Input() value:T = null;
	@Input() dashboardPanel: DashboardPanel;
	@Input() linkParameters:any;
	@Input() dashboardSizes:DashboardSizes = new DashboardSizes();
	@Input() inline:boolean;
	private kerviService: NGXKerviService;
	constructor() { 
		//console.log("cnio",this);
		this.kerviService = AppInjector.get(NGXKerviService);  
	}

	ngOnInitValue() {
		if (this.value== null && this.valueId)
			this.value = this.kerviService.getComponent(this.valueId) as T;
		if (!this.linkParameters)
      		this.linkParameters = this.value.ui;
	}
}
