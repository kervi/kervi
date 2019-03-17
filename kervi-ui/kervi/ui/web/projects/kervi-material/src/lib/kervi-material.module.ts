import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxKerviModule, NGXKerviPipesModule  } from 'ngx-kervi'
import { DashboardPanelComponent } from './dashboard-panel/dashboard-panel.component';
import { WidgetComponent } from './widget/widget.component';
import {  ValuesModule } from './values/values.module';

import { ControllerPadComponent } from './controller-pad/controller-pad.component';
import { CamViewerComponent } from './cam-viewer/cam-viewer.component';
import { ActionComponent } from './action/action.component';
import { UIComponentsModule} from './ui-components/ui-components.module'

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  imports: [
    BrowserModule,
    NGXKerviPipesModule,
    NgxKerviModule,
    ValuesModule,
    NgZorroAntdModule,
    FlexLayoutModule,
    UIComponentsModule
    
  ],
  declarations: [
    DashboardPanelComponent,
    WidgetComponent,
    ControllerPadComponent,
    CamViewerComponent,
    ActionComponent
  ],
  exports: [
    DashboardPanelComponent,
    ControllerPadComponent,
    CamViewerComponent
  ]
})
export class KerviMaterialModule { }
