// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit } from '@angular/core';
import { KerviDateTimeComponent } from 'ngx-kervi';
declare var moment:any;

@Component({
	selector: 'kervi-value-datetime',
	templateUrl: './datetime-value.component.html',
	styleUrls: ['./datetime-value.component.scss']
})
export class DateTimeComponent extends KerviDateTimeComponent implements OnInit {
	constructor() { 
		super();
	}

	ngOnInit() {
		this.ngOnInitDateTime();
	}
}
