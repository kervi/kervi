// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ControllerButtonModel } from '../models/controller.model'
import { KerviService } from '../../kervi.service'
declare var jQuery: any;

@Component({
  selector: 'kervi-controller-button',
  templateUrl: './controller-button.component.html',
  styleUrls: ['./controller-button.component.css']
})
export class ControllerButtonComponent implements OnInit {
  @Input() button: ControllerButtonModel;
  @Input() dashboardType: string;
  constructor(private kerviService: KerviService, private elementRef: ElementRef) { }


  public clickButton() {
    this.kerviService.spine.sendCommand(this.button.clickCommand);
  }
  ngOnInit() {
    var self = this;

  }

}
