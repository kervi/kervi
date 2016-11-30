// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { ControllerInputModel } from '../models/controller.model';
import { KerviService } from '../../kervi.service'
declare var jQuery: any;

@Component({
	selector: 'kervi-controller-number-input',
	templateUrl: './controller-number-input.component.html',
	styleUrls: ['./controller-number-input.component.css']
})
export class ControllerNumberInputComponent implements OnInit {
	@Input() input: ControllerInputModel;
	@Input() dashboardType: string;
	private moveDelayTimer = null;

	constructor(private kerviService: KerviService, private elementRef: ElementRef) { }

	ngOnInit() {
		var self = this;
		var color = "#ffffff";
		if (this.dashboardType == "dashboard")
			color = "#000000";
		var p = jQuery('fieldset', this.elementRef.nativeElement).xy({
			displayPrevious: false
			, min: this.input.minValue
			, max: this.input.maxValue
			, width: this.input.ui.orientation == "vertical" ? 30 : 180
			, height: this.input.ui.orientation == "vertical" ? 180 : 30
			, fgColor: color
			, bgColor: color
			, change: function (value) {
				if (self.moveDelayTimer)
					clearTimeout(self.moveDelayTimer);


				self.moveDelayTimer = setTimeout(function () {
					if (self.input.ui.orientation == "vertical") {
						self.kerviService.spine.sendCommand(self.input.command, value[1]);
					} else {
						self.kerviService.spine.sendCommand(self.input.command, value[0]);
					}
				}, 200);
			}
		})
			.css({ 'border': '2px solid ' + color });

		self.input.value$.subscribe(function (v) {
			if (self.input.ui.orientation == "vertical")
				jQuery("input[name='y']", self.elementRef.nativeElement).val(v).change();
			else
				jQuery("input[name='x']", self.elementRef.nativeElement).val(v).change();
		});
	}

}
