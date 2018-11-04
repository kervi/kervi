// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input } from '@angular/core';
import { KerviValue, DashboardPanel, DashboardSizes } from 'kervi-js'

@Component({
	selector: 'kervi-value',
	templateUrl: './kervi-value.component.html',
	styleUrls: ['./kervi-value.component.scss']
	//directives: [ CommonModule  ],
})
export class KerviValueComponent {
	@Input() value: KerviValue;
	@Input() dashboardPanel: DashboardPanel;
	@Input() linkParameters:any;
	@Input() inline:boolean = false;
	@Input() dashboardSizes:DashboardSizes = new DashboardSizes();

	constructor() { 
	}
	 
	
}
