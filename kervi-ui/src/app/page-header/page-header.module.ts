import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header.component';
//import { SensorsModule } from '../sensors/sensors.module'
//import { CoreSensorsComponent} from '../sensors/core-sensors/core-sensors.component';
@NgModule({
  
  imports: [
    CommonModule,
    //SensorsModule,
    //CoreSensorsComponent
  ],
  declarations: [PageHeaderComponent/*, CoreSensorsComponent*/]
})
export class PageHeaderModule { }
