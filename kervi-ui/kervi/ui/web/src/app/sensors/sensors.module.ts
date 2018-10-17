// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorComponent } from './sensor/sensor.component';
import { RouterModule } from '@angular/router';
import { ValuesModule } from '../values/values.module'
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ValuesModule
  ],
  exports:[
    SensorComponent
  ],
  providers: [ ],
  declarations: [
    SensorComponent
    
    ]
})
export class SensorsModule { }
