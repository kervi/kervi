import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxKerviModule, NGXKerviPipesModule  } from 'ngx-kervi'
import { DashboardPanelComponent } from './dashboard-panel/dashboard-panel.component';
import { WidgetComponent } from './widget/widget.component';
import {  ValuesModule } from './values/values.module'

import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel'

@NgModule({
  imports: [
    BrowserModule,
    NGXKerviPipesModule,
    NgxKerviModule,
    CardModule,
    PanelModule,
    ValuesModule
  ],
  declarations: [
    DashboardPanelComponent,
    WidgetComponent
    
  ],
  exports: [
    DashboardPanelComponent
  ]
})
export class KerviPrimeNGModule { }
