// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { SensorModel } from '../../sensors/models/sensor.model'
import { SensorsService } from '../../sensors/sensors.service'
declare var jQuery: any;

@Component({
  selector: 'sensor',
  templateUrl: './layout-sensor.component.html',
  styleUrls: []
})
export class LayoutSensorComponent implements OnInit {
  @Input() id:string;
  @Input() dashboardType: string;
  sensor:SensorModel;
  constructor(private sensorsService:SensorsService) {
      console.log("ls constructor",this.id);
      
   }

  ngOnInit() {
    console.log('ls',this.id);
    if (this.id){
      this.sensor=this.sensorsService.getSensorById(this.id);
      console.log("ls c",this.sensor);
    }
  }


}
