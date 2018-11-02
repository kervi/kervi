import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxKerviModule, NGXKerviPipesModule  } from 'ngx-kervi'

import { NgxKerviComponentsComponent } from './ngx-kervi-components.component';
import { ControllerPadComponent } from './controller-pad/controller-pad.component';
import { CamViewerComponent } from './cam-viewer/cam-viewer.component';
import { DashboardSectionComponent } from './dashboard-section/dashboard-section.component';

@NgModule({
  imports: [
    NgxKerviModule,
    
    BrowserModule
  ],
  declarations: [NgxKerviComponentsComponent, ControllerPadComponent, CamViewerComponent, DashboardSectionComponent],
  exports: [NgxKerviComponentsComponent]
})
export class NgxKerviComponentsModule { }
