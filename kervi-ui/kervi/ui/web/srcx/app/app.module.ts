//import { NGXKerviService} from 'projects/ngx-kervi/src/public_api';
//import { KerviBaseService } from 'projects/kervi-js/src/public_api';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ConnectComponent } from './connect/connect.component';
//import { NGXKerviService, KerviTemplateService} from "ngx-kervi";
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxKerviModule } from 'ngx-kervi';
import { NGXKerviPipesModule } from 'ngx-kervi'
import { NgxKerviComponentsModule  } from 'ngx-kervi-components'
const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/connect',
    pathMatch: 'full'
  },
  { path: 'connect', component: ConnectComponent },
  { path: 'authenticate', component: LoginComponent },
  { path: 'dashboard/:name', component: DashboardComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConnectComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    NgxKerviModule,
    NGXKerviPipesModule,
    NgxKerviComponentsModule,
    RouterModule.forRoot(ROUTES)
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
