// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { KerviColorComponent } from 'ngx-kervi'

@Component({
	selector: 'kervi-value-color',
	templateUrl: './color-value.component.html',
	styleUrls: ['./color-value.component.scss']
})
export class ColorComponent extends KerviColorComponent implements OnInit {
	
	constructor() { 
		super();
		//console.log("cnio",this);
	}


	setValue(v){
		console.log(v);
	}
	ngOnInit() {
		this.ngOnInitColor();
	}
}
