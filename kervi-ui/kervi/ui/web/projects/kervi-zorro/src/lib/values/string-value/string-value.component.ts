// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { KerviStringComponent } from 'ngx-kervi'

declare var jQuery:any;
@Component({
	selector: 'kervi-value-string',
	templateUrl: './string-value.component.html',
	styleUrls: ['./string-value.component.scss']
})
export class StringComponent extends KerviStringComponent implements OnInit {
	constructor(private elementRef: ElementRef) 
	{
		super();
	 }

	ngOnInit(){
		var self = this;
		this.ngOnInitString();
		this.value.value$.subscribe(function(v){
		 	jQuery("input", self.elementRef.nativeElement).val(v).change();
		})
	}

	onChange(event){
		var v = jQuery("input", this.elementRef.nativeElement).val();
		console.log("evv", v, event);
		this.value.set(v);
	}
}
