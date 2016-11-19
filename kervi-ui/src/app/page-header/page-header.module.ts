import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header.component';
import { RouterModule } from '@angular/router';
import { SensorsModule } from '../sensors/sensors.module'
@NgModule({
  exports:[
    PageHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SensorsModule
  ],
  declarations: [
    PageHeaderComponent
  ]
})
export class PageHeaderModule { }
