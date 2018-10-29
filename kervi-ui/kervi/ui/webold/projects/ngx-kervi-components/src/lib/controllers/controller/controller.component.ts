// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input, OnInit } from '@angular/core';
import { ControllerModel } from '../../models/controller.model'
import { DashboardSectionModel } from '../../models/dashboard.model'
@Component({
  selector: 'kervi-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})
export class ControllerComponent implements OnInit {
  @Input() controller: ControllerModel;
  @Input() section: string = "left";
  @Input() dashboardSection: DashboardSectionModel;
  @Input() parameters:any;
  
  constructor() { }

  ngOnInit() {
    console.log("ctrli", this);
  }

}
