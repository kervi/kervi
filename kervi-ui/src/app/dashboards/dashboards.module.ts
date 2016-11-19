import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardsService } from './dashboards.service'
import { COMPILER_PROVIDERS } from '@angular/compiler';
import { SensorsModule } from '../sensors/sensors.module';
import { ControllersModule } from '../controllers/controllers.module';
import { CamBoardComponent } from './cam-board/cam-board.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { PageHeaderModule } from '../page-header/page-header.module';
import { RouterModule } from '@angular/router';

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
  ],
  providers: [ DashboardsService, COMPILER_PROVIDERS],
  declarations: [
    CamBoardComponent,
    DashboardComponent,
    
    ]
})
export class DashboardsModule { }
