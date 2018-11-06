// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { KerviBooleanComponent } from 'ngx-kervi';

@Component({
	selector: 'kervi-value-boolean',
	templateUrl: './boolean-value.component.html',
	styleUrls: ['./boolean-value.component.scss']
	//directives: [ CommonModule  ],
})
export class BooleanComponent extends KerviBooleanComponent implements OnInit {
	
	constructor() { 
		super();
	}

	ngOnInit() {
		this.ngOnInitBoolean();
	}

}
