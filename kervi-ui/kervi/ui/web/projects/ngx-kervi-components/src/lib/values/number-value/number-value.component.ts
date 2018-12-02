// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit } from '@angular/core';
import { KerviNumberComponent } from 'ngx-kervi'

@Component({
	selector: 'kervi-value-number',
	templateUrl: './number-value.component.html',
	styleUrls: ['./number-value.component.scss']
	//directives: [ CommonModule  ],
})
export class NumberComponent extends KerviNumberComponent implements OnInit {
	constructor() { 
		super();
	}
	
	ngOnInit() {
		this.ngOnInitNumber();
	}
}
