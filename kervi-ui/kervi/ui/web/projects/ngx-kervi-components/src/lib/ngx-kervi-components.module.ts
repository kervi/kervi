import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxKerviModule, NGXKerviPipesModule  } from 'ngx-kervi'

import { WidgetComponent } from './widget/widget.component';
import { ControllerPadComponent } from './controller-pad/controller-pad.component';
import { CamViewerComponent } from './cam-viewer/cam-viewer.component';
import { DashboardPanelComponent } from './dashboard-panel/dashboard-panel.component';
import {  ValuesModule } from './values/values.module'
@NgModule({
  imports: [
    NgxKerviModule,
    NGXKerviPipesModule,
    BrowserModule,
    ValuesModule
  ],
  declarations: [
    WidgetComponent,
    ControllerPadComponent,
    CamViewerComponent,
    DashboardPanelComponent,
    
  ],
  exports: [
    DashboardPanelComponent
  ]
})
export class NgxKerviComponentsModule { }
