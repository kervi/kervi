// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, ElementRef } from '@angular/core';
import { KerviNumberComponent } from 'ngx-kervi'
@Component({
	selector: 'kervi-value-number',
	templateUrl: './number-value.component.html',
	styleUrls: ['./number-value.component.scss']
})
export class NumberComponent extends KerviNumberComponent implements OnInit {
	constructor(private elementRef:ElementRef) { 
		super();
	}
	
	ngOnInit() {
		this.ngOnInitNumber();
	}
}
