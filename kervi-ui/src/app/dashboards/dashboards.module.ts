// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardsService } from './dashboards.service'
import { COMPILER_PROVIDERS } from '@angular/compiler';
import { SensorsModule } from '../sensors/sensors.module';
import { ControllersModule } from '../controllers/controllers.module';
import { CamBoardComponent } from './cam-board/cam-board.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { DashboardLayout } from './dashboard-layout/dashboard-layout.component'; 
import { PageHeaderModule } from '../page-header/page-header.module';
import { RouterModule } from '@angular/router';
import { DashboardDynamicTypeBuilder } from './dashboard-layout/dashboard-type.builder';
import { LayoutControllerComponent } from './dashboard-layout/layout-controller.component'
import { LayoutSensorComponent } from './dashboard-layout/layout-sensor.component'
@NgModule({
  imports: [
    CommonModule,
    SensorsModule,
    ControllersModule,
    PageHeaderModule,
    RouterModule
  ],
  exports:[
    CamBoardComponent,
    DashboardComponent,
    LayoutControllerComponent,
    LayoutSensorComponent
  ],
  providers: [ DashboardsService, DashboardDynamicTypeBuilder, COMPILER_PROVIDERS],
  declarations: [
    CamBoardComponent,
    DashboardComponent,
    DashboardLayout,
    LayoutControllerComponent,
    LayoutSensorComponent
    ]
})
export class DashboardsModule { }
