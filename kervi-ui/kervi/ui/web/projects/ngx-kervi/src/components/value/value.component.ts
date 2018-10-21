// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { KerviValueModel } from 'kervi-js';
import { KerviService } from '../../kervi.service';
import { DashboardSectionModel, DashboardSizes } from 'kervi-ts/models/dashboard.model';

declare var Qty: any;

@Component({
	selector: 'kervi-value',
	templateUrl: './value.component.html',
	styleUrls: ['./value.component.scss']
})
export class DynamicNumberComponent implements OnInit {
	@Input() value: KerviValueModel;
	@Input() dashboardSection: DashboardSectionModel;
	@Input() linkParameters:any;
	@Input() defaultSizes:DashboardSizes = new DashboardSizes();

	constructor(private kerviService: KerviService, private elementRef: ElementRef) { 
		//console.log("cnio",this);
	}

	ngOnInit() {
		if (!this.linkParameters)
      		this.linkParameters = this.value.ui;
	}
}
