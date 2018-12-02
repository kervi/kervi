import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxKerviModule, NGXKerviPipesModule  } from 'ngx-kervi'
import { WidgetComponent } from './widget/widget.component';
import { ControllerPadComponent } from './controller-pad/controller-pad.component';
import { CamViewerComponent } from './cam-viewer/cam-viewer.component';
import { DashboardPanelComponent } from './dashboard-panel/dashboard-panel.component';
import {  ValuesModule } from './values/values.module'
import { ActionComponent } from './action/action.component';
import { UIComponentsModule} from './ui-components/ui-components.module'

@NgModule({
  imports: [
    NgxKerviModule,
    NGXKerviPipesModule,
    BrowserModule,
    ValuesModule,
    UIComponentsModule
  ],
  declarations: [
    WidgetComponent,
    ControllerPadComponent,
    CamViewerComponent,
    DashboardPanelComponent,
    ActionComponent
  ],
  exports: [
    DashboardPanelComponent,
    ControllerPadComponent,
    CamViewerComponent
  ]
})
export class NgxKerviComponentsModule { }
