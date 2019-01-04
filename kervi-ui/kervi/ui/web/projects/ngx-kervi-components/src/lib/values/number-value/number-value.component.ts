// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, ElementRef } from '@angular/core';
import { KerviNumberComponent } from 'ngx-kervi'
declare var jQuery; 
@Component({
	selector: 'kervi-value-number',
	templateUrl: './number-value.component.html',
	styleUrls: ['./number-value.component.scss']
	//directives: [ CommonModule  ],
})
export class NumberComponent extends KerviNumberComponent implements OnInit {
	constructor(private elementRef:ElementRef) { 
		super();
	}
	
	ngOnInit() {
		this.ngOnInitNumber();
	}

	onChange(event){
		var v = jQuery("input", this.elementRef.nativeElement).val();
		console.log("evv", v, event);
		this.value.set(v);
	}
}
