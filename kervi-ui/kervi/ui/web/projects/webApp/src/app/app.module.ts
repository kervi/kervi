
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {ToolbarModule} from 'primeng/toolbar';
import { MenuModule} from 'primeng/menu';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ConnectComponent } from './connect/connect.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './prime-dashboard/dashboard.component';
import { NgxKerviModule } from 'ngx-kervi';
import { NGXKerviPipesModule } from 'ngx-kervi'
import { NgxKerviComponentsModule  } from 'ngx-kervi-components'
import { KerviPrimeNGModule  } from 'kervi-primeNG'
const ROUTES: Routes = [
  
  { path: 'connect', component: ConnectComponent },
  { path: 'authenticate', component: LoginComponent },
  { path: 'dashboard/:name', component: DashboardComponent },
  {
    path: '',
    redirectTo: '/connect',
    pathMatch: 'full'
  }
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
    BrowserAnimationsModule,
    MenuModule,
    ToolbarModule,
    NgxKerviModule,
    NGXKerviPipesModule,
    KerviPrimeNGModule,
    //NgxKerviComponentsModule,
    RouterModule.forRoot(ROUTES)
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
