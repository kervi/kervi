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
	@Input() set valueId(v:string){
		this.value = this.kerviService.getComponent(this.valueId) as T;
	}
	@Input() value:T = null;
	
	@Input() linkParameters:any;
	@Input() dashboardSizes:DashboardSizes = new DashboardSizes();
	@Input() inline:boolean;
	protected kerviService: NGXKerviService;
	constructor() { 
		this.kerviService = AppInjector.get(NGXKerviService);  
	}

	ngOnInitValue() {
		if (!this.linkParameters)
      		this.linkParameters = this.value.ui;
	}
}
