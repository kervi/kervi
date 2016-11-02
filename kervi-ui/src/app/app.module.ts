import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';

import { SensorsModule } from './sensors/sensors.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { ConnectComponent } from './connect/connect.component';
import { routing } from './app.routes'
import { KerviService} from "./kervi.service";
import { ConnectedService} from "./connected.service"
import { CamBoardComponent } from './cam-board/cam-board.component';

import { SensorsService} from './sensors/sensors.service';
import { ControllersComponent } from './controllers/controllers/controllers.component';
import { ControllerComponent } from './controllers/controller/controller.component';
import { ControllersService } from './controllers/controllers.service';
import { ControllerAxisComponent } from './controllers/controller-axis/controller-axis.component';
import { ControllerButtonComponent } from './controllers/controller-button/controller-button.component';
import { CamViewerComponent } from './controllers/cam-viewer/cam-viewer.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChartsComponent,
    PageHeaderComponent,
    ConnectComponent,
    CamBoardComponent,
    ControllersComponent,
    ControllerComponent,
    ControllerAxisComponent,
    ControllerButtonComponent,
    CamViewerComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    SensorsModule
  ],
  providers:[KerviService,ConnectedService,SensorsService,ControllersService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (private connectedService:ConnectedService){}
}
