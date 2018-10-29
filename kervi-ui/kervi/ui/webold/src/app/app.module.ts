import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { ConnectComponent } from './connect/connect.component';
import { LoginComponent } from './login/login.component';

import { NGXKerviService, KerviPipesModule} from "ngx-kervi";
//import { KerviPipesModule } from './pipes/pipes.module'
const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/connect',
    pathMatch: 'full'
  },
  { path: 'connect', component: ConnectComponent },
  { path: 'authenticate', component: LoginComponent },
  // { path: 'dashboard/:name', component: DashboardComponent },
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
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [NGXKerviService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (){}
}
