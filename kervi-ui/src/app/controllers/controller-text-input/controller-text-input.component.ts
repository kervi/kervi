// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { ControllerInputModel } from '../models/controller.model';
import { KerviService } from '../../kervi.service'
declare var jQuery:any;
@Component({
	selector: 'kervi-controller-text-input',
	templateUrl: './controller-text-input.component.html',
	styleUrls: ['./controller-text-input.component.css']
})
export class ControllerTextInputComponent implements OnInit {
	@Input() input: ControllerInputModel;
	@Input() dashboardType: string;
	
	constructor(private kerviService: KerviService, private elementRef: ElementRef) { }

	ngOnInit(){
		var self=this;
		this.input.value$.subscribe(function(v){
			console.log("tic",v);
			jQuery("input", self.elementRef.nativeElement).val(v).change();
			
		})
	}

	onChange(event){
		this.kerviService.spine.sendCommand(this.input.command, event.srcElement.value);
	}



}
