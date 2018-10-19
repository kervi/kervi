import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DashboardsModule } from './dashboards/dashboards.module'
import { ValuesModule } from './values/values.module'

import { AppComponent } from './app.component';
import { ConnectComponent } from './connect/connect.component';
import { DashboardComponent } from './dashboards/dashboard/dashboard.component';

import { KerviService} from "./kervi.service";
import { ConnectedService} from "./connected.service";
import { DashboardsService} from "./dashboards/dashboards.service"
import { TemplateService } from "./template.service"
import { KerviPipesModule } from './pipes/pipes.module'
const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/connect',
    pathMatch: 'full'
  },
  { path: 'connect', component: ConnectComponent },
  { path: 'dashboard/:name', component: DashboardComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ConnectComponent,
  ],
  exports: [
    
  ],
  imports: [
    KerviPipesModule,
    CommonModule,
    DashboardsModule,
    ValuesModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [KerviService, DashboardsService, ConnectedService, TemplateService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (private connectedService:ConnectedService){}
}
