// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';

import { DashboardsModule } from './dashboards/dashboards.module'
import { SensorsModule } from './sensors/sensors.module';
import { ControllersModule } from './controllers/controllers.module';
import { ChartsModule } from './charts/charts.module';

import { AppComponent } from './app.component';
//import { ChartsComponent } from './charts/charts.component';
//import { PageHeaderComponent } from './page-header/page-header.component';
import { ConnectComponent } from './connect/connect.component';
import { routing } from './app.routes'
import { KerviService} from "./kervi.service";
import { ConnectedService} from "./connected.service"


@NgModule({
  declarations: [
    AppComponent,
    //ChartsComponent,
    //PageHeaderComponent,
    ConnectComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    SensorsModule,
    ControllersModule,
    DashboardsModule,
    ChartsModule,
    
  ],
  providers:[KerviService,ConnectedService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (private connectedService:ConnectedService){}
}
