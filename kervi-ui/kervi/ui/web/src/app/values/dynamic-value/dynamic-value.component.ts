// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { DynamicNumberModel } from '../../models/dynamicValues.model';
import { KerviService } from '../../kervi.service'
import { TemplateService } from '../../template.service'
import { DashboardSectionModel, DashboardSizes } from '../../models/dashboard.model'

@Component({
	selector: 'dynamic-value',
	templateUrl: './dynamic-value.component.html',
	styleUrls: ['./dynamic-value.component.scss']
	//directives: [ CommonModule  ],
})
export class DynamicValueComponent implements OnInit {
	@Input() value: any;
	@Input() dashboardSection: DashboardSectionModel;
	@Input() parameters:any;
	@Input() inline:boolean = false;
	@Input() defaultSizes:DashboardSizes = new DashboardSizes();
	private size:number = 0;
	private unitSize:number=150;
	

	constructor(private kerviService: KerviService, private elementRef: ElementRef, private templateService:TemplateService) { 
		//console.log("cnio",this);
	}

	 
	ngOnInit() {
		

		
	}

}
