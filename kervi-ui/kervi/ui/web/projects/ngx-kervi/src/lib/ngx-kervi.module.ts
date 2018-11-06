import { NgModule, Injector } from '@angular/core';
import { NgxKerviComponent } from './ngx-kervi.component';
import { KerviDashboardComponent } from './dashboard/kervi-dashboard.component';
import { setAppInjector } from "./app-injector.service";
import { KerviDashboardPanelComponent } from './dashboard/kervi-dashboard-panel.component';
import { KerviCamViewerComponent } from './dashboard/kervi-cam-viewer.component';
import { KerviControllerPadComponent } from './dashboard/kervi-controller-pad.component';
import { NGXKerviService } from './ngx-kervi.service';
import { KerviTemplateService } from './ngx-kervi-template.service';
import { KerviValueComponent } from './values/value.component'
import { KerviNumberComponent } from './values/kervi-number-value.component'
import { KerviStringComponent } from './values/kervi-string-value.component'
import { KerviBooleanComponent } from './values/kervi-boolean-value.component'
import { KerviColorComponent } from './values/kervi-color-value.component'
import { KerviActionComponent } from './actions/kervi-action.component'
import { KerviWidgetComponent } from './dashboard/kervi-widget.component'
@NgModule({
  imports: [
  ],
  declarations: [
    NgxKerviComponent,
    KerviDashboardComponent,
    KerviDashboardPanelComponent,
    KerviCamViewerComponent,
    KerviControllerPadComponent,
    KerviNumberComponent,
    KerviStringComponent,
    KerviBooleanComponent,
    KerviColorComponent,
    KerviActionComponent,
    KerviValueComponent,
    KerviWidgetComponent
  ],
  providers: [NGXKerviService, KerviTemplateService],
  exports: [
    NgxKerviComponent,
    KerviDashboardComponent,
    KerviDashboardPanelComponent,
    KerviCamViewerComponent,
    KerviControllerPadComponent,
    KerviNumberComponent,
    KerviWidgetComponent,
    KerviStringComponent,
    KerviBooleanComponent,
    KerviColorComponent,
    KerviActionComponent,
  ]
})
export class NgxKerviModule {
  constructor(private injector:Injector){
    setAppInjector(injector);
  }
 }
