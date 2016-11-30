// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorsComponent } from './sensors/sensors.component';
import { SensorComponent } from './sensor/sensor.component';
import { CoreSensorsComponent } from './core-sensors/core-sensors.component'
import { SensorsService } from './sensors.service';
import { SparklineComponent } from './sparkline/sparkline.component'
@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    SensorComponent,
    CoreSensorsComponent,
    SensorsComponent,
    CommonModule
  ],
  providers: [SensorsService],
  declarations: [SensorsComponent, SensorComponent, CoreSensorsComponent, SparklineComponent]
})
export class SensorsModule { }
