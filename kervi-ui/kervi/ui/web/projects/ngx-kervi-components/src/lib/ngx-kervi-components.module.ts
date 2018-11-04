import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxKerviModule, NGXKerviPipesModule  } from 'ngx-kervi'

import { NgxKerviComponentsComponent } from './ngx-kervi-components.component';
import { ControllerPadComponent } from './controller-pad/controller-pad.component';
import { CamViewerComponent } from './cam-viewer/cam-viewer.component';
import { DashboardPanelComponent } from './dashboard-panel/dashboard-panel.component';

@NgModule({
  imports: [
    NgxKerviModule,
    NGXKerviPipesModule,
    BrowserModule
  ],
  declarations: [
    NgxKerviComponentsComponent,
    ControllerPadComponent,
    CamViewerComponent,
    DashboardPanelComponent
  ],
  exports: [
    NgxKerviComponentsComponent,
    DashboardPanelComponent
  ]
})
export class NgxKerviComponentsModule { }
