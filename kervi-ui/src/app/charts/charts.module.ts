// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { SensorsModule } from '../sensors/sensors.module';
import { PageHeaderModule } from '../page-header/page-header.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ChartsComponent} from './charts.component'
@NgModule({
  imports: [
    SensorsModule,
    PageHeaderModule,
    RouterModule
  ],
  exports:[
    ChartsComponent
  ],
  providers: [ ],
  declarations: [
    ChartsComponent
    
    ]
})
export class ChartsModule { }
