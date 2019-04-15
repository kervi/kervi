// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit } from '@angular/core';
import { KerviBooleanComponent } from 'ngx-kervi';

@Component({
	selector: 'kervi-value-boolean',
	templateUrl: './boolean-value.component.html',
	styleUrls: ['./boolean-value.component.scss']
})
export class BooleanComponent extends KerviBooleanComponent implements OnInit {
	constructor() { 
		super();
	}

	changeState(event){
		this.value.set(event);
	}

	ngOnInit() {
		this.ngOnInitBoolean();
	}
}
