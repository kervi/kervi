// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input, OnInit, ElementRef, ContentChild } from '@angular/core';
import { IComponent, DashboardSection, DashboardSizes } from 'kervi-js';
import { KerviComponentIcon, KerviComponentLabel, KerviComponentValue, KerviComponentValueIcon, KerviComponentValueUnit } from './kervi-component.directives'
@Component({
	selector: 'kervi-component',
	templateUrl: './kervi-component.component.html',
	styleUrls: ['./kervi-component.component.scss']
})
export class KerviComponent implements OnInit {
    @Input() componentId:string=null;
    @Input() component:IComponent=null;
	@Input() dashboardSection: DashboardSection;
	@Input() linkParameters:any;
	@Input() defaultSizes:DashboardSizes = new DashboardSizes();

    
    @ContentChild(KerviComponentIcon) _iconChild: KerviComponentIcon;
    @ContentChild(KerviComponentLabel) _labelChild: KerviComponentLabel;
	@ContentChild(KerviComponentValue) _valueChild: KerviComponentValue;
	@ContentChild(KerviComponentValueIcon) _valueIconChild: KerviComponentValueIcon;
	@ContentChild(KerviComponentValueUnit) _valueUnitChild: KerviComponentValueUnit;
    

	constructor( private elementRef: ElementRef) { 
		//console.log("cnio",this);
	}

	ngOnInit() {
		
	}
}
