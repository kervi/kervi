// Copyright (c) 2018, Tim Wentzlau
// Licensed under MIT

import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { DynamicEnumModel } from '../../models/dynamicValues.model';
import { KerviService } from '../../kervi.service'
import { DashboardSectionModel, DashboardSizes } from '../../models/dashboard.model'
import { BehaviorSubject } from 'rxjs/Rx';
declare var jQuery:any;
@Component({
	selector: 'dynamic-value-enum',
	templateUrl: './enum-value.component.html',
	styleUrls: ['./enum-value.component.scss']
})
export class DynamicEnumComponent implements OnInit {
	@Input() input: DynamicEnumModel;
	@Input() dashboardSection: DashboardSectionModel;
	@Input() parameters:any;
	@Input() inline:boolean = false;
	@Input() defaultSizes:DashboardSizes = new DashboardSizes();
	selectedText$:BehaviorSubject<string> = new BehaviorSubject<string>("");
    
    constructor(private kerviService: KerviService, private elementRef: ElementRef) { }

	ngOnInit(){
		var self=this;
		if (!this.parameters)
			  this.parameters = this.input.ui;
        self.selectedText$.next(self.input.lastSelected$.value.text);
		this.input.lastSelected$.subscribe(function(v){
            self.selectedText$.next( v.text); 
		})
	}

	onChange(event){
		console.log("evv",event);
		this.kerviService.spine.sendCommand(this.input.command, event.target.value);
    }
    select(value){
        this.kerviService.spine.sendCommand(this.input.command, value);
    }
}
