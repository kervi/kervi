// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { DynamicColorModel } from '../../models/dynamicValues.model';
import { KerviService } from '../../kervi.service'
import { TemplateService } from '../../template.service'
import { DashboardSectionModel, DashboardSizes } from '../../models/dashboard.model'

@Component({
	selector: 'dynamic-value-color',
	templateUrl: './color-value.component.html',
	styleUrls: ['./color-value.component.scss']
	//directives: [ CommonModule  ],
})
export class DynamicColorComponent implements OnInit {
	@Input() value: DynamicColorModel;
	@Input() dashboardSection: DashboardSectionModel;
	@Input() parameters:any;
	@Input() inline:boolean = false;
	@Input() defaultSizes:DashboardSizes = new DashboardSizes();
	private size:number = 0;
	private unitSize:number=150;
	
	displayType:string="button";
	
	constructor(private kerviService: KerviService, private elementRef: ElementRef, private templateService:TemplateService) { 
		//console.log("cnio",this);
	}

	ngOnInit() {
		
	}
}
