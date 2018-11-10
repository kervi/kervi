// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input, ElementRef } from '@angular/core';
import { IComponent, DashboardPanel, DashboardSizes } from 'kervi-js';
import { NGXKerviService } from '../ngx-kervi.service';
import { AppInjector } from '../app-injector.service';
@Component({
	selector: 'kervi-widget-base',
	template: ''
})
export class KerviWidgetComponent   {
	@Input() set componentId(v:string){
		this.component = this.kerviService.getComponent(this.componentId);
	}
	@Input() component:IComponent = null;
	@Input() dashboardPanel: DashboardPanel;
	@Input() linkParameters:any;
	@Input() dashboardSizes:DashboardSizes = new DashboardSizes();
    @Input() inline:boolean;
	public widgetType:string="value";
	
	
	private kerviService: NGXKerviService;
	private elementRef: ElementRef;
	constructor() { 
		//console.log("cnio",this);
		this.kerviService = AppInjector.get(NGXKerviService);  
	}

	ngOnInitWidget() {
			
		if (!this.linkParameters)
              this.linkParameters = this.component.ui;
    
        if (!this.inline && this.linkParameters.inline){
            this.inline = true;
		}
		//console.log("widget", this.component, this.linkParameters);
		if (this.linkParameters.type){
			if (this.linkParameters.type.indexOf("gauge") > -1 ){
				this.widgetType = "gauge";

			} else if (this.linkParameters.type=="chart"){
				this.widgetType="chart"
			}
		}
	}
}
