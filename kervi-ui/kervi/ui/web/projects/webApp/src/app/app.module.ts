
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

import { NgZorroAntdModule, NZ_I18N, NZ_ICONS, en_US } from 'ng-zorro-antd';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons'
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ConnectComponent } from './connect/connect.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './prime-dashboard/dashboard.component';
import { NgxKerviModule } from 'ngx-kervi';
import { NGXKerviPipesModule } from 'ngx-kervi'
import { KerviZorroModule  } from 'kervi-zorro'
import { FlexLayoutModule } from '@angular/flex-layout';



registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])


const ROUTES: Routes = [
  
  { path: 'connect', component: ConnectComponent },
  { path: 'authenticate', component: LoginComponent },
  { path: 'dashboard/:name', component: DashboardComponent },
  {
    path: '',
    redirectTo: '',
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
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxKerviModule,
    NGXKerviPipesModule,
    KerviZorroModule,
    FlexLayoutModule,
    NgZorroAntdModule,
    //NgxKerviComponentsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers:[
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
