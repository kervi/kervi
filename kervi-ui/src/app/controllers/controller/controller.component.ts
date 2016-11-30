// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input, OnInit } from '@angular/core';
import { ControllerModel } from '../models/controller.model'
@Component({
  selector: 'kervi-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {
  @Input() controller: ControllerModel;
  @Input() section: string = "left";
  @Input() dashboardType: string;
  constructor() { }

  ngOnInit() {
  }

}
