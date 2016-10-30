import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorsComponent } from './sensors.component';
import { SensorComponent } from './sensor/sensor.component';
import { CoreSensorsComponent } from './core-sensors/core-sensors.component'
import { SensorsService } from './sensors.service';
@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    SensorComponent,
    CoreSensorsComponent
  ],
  providers: [SensorsService],
  declarations: [SensorsComponent, SensorComponent, CoreSensorsComponent]
})
export class SensorsModule { }
