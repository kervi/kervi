// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { SensorModel } from '../models/sensor.model'
@Component({
  selector: 'kervi-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SensorComponent implements OnInit {
  @Input() sensor: SensorModel = null;
  
  @Input() style: string = "inline";
  constructor() { }

  ngOnInit() {
  }

}
