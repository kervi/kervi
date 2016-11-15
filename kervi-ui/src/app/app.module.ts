import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';

import { SensorsModule } from './sensors/sensors.module';
import { ControllersModule } from './controllers/controllers.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { ConnectComponent } from './connect/connect.component';
import { routing } from './app.routes'
import { KerviService} from "./kervi.service";
import { ConnectedService} from "./connected.service"
import { CamBoardComponent } from './cam-board/cam-board.component';

 


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChartsComponent,
    PageHeaderComponent,
    ConnectComponent,
    CamBoardComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    SensorsModule,
    ControllersModule,
    
  ],
  providers:[KerviService,ConnectedService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (private connectedService:ConnectedService){}
}
