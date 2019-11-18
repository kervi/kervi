import { NgModule, Injector } from '@angular/core';
import { NgxKerviComponent } from './ngx-kervi.component';
import { KerviDashboardComponent } from './dashboard/kervi-dashboard.component';
import { setAppInjector } from "./app-injector.service";
import { KerviDashboardPanelComponent } from './dashboard/kervi-dashboard-panel.component';
import { KerviControllerPadComponent } from './dashboard/kervi-controller-pad.component';
import { NGXKerviService } from './ngx-kervi.service';
import { KerviTemplateService } from './ngx-kervi-template.service';
import { KerviValueComponent } from './values/value.component';
import { KerviNumberComponent } from './values/kervi-number-value.component';
import { KerviStringComponent } from './values/kervi-string-value.component';
import { KerviBooleanComponent } from './values/kervi-boolean-value.component';
import { KerviColorComponent } from './values/kervi-color-value.component';
import { KerviDateTimeComponent } from './values/kervi-datetime-value.component';
import { KerviActionComponent } from './actions/kervi-action.component';
import { KerviCameraComponent } from './camera/kervi-camera.component';
import { KerviWidgetComponent } from './dashboard/kervi-widget.component';
import { KerviUserLogComponent } from './user-log/user-log.component';
import { KerviDirectoryComponent } from './files/kervi-directory.component';
import { KerviAppHealthComponent } from './dashboard/app-health.component';

@NgModule({
  imports: [
  ],
  declarations: [
    NgxKerviComponent,
    KerviDashboardComponent,
    KerviDashboardPanelComponent,
    KerviControllerPadComponent,
    KerviNumberComponent,
    KerviStringComponent,
    KerviBooleanComponent,
    KerviColorComponent,
    KerviDateTimeComponent,
    KerviActionComponent,
    KerviValueComponent,
    KerviWidgetComponent,
    KerviCameraComponent,
    KerviUserLogComponent,
    KerviDirectoryComponent,
    KerviAppHealthComponent
  ],
  providers: [NGXKerviService, KerviTemplateService],
  exports: [
    NgxKerviComponent,
    KerviDashboardComponent,
    KerviDashboardPanelComponent,
    KerviControllerPadComponent,
    KerviNumberComponent,
    KerviWidgetComponent,
    KerviStringComponent,
    KerviBooleanComponent,
    KerviColorComponent,
    KerviDateTimeComponent,
    KerviActionComponent,
    KerviCameraComponent,
    KerviUserLogComponent,
    KerviActionComponent,
    KerviAppHealthComponent
  ]
})
export class NgxKerviModule {
  constructor(private injector:Injector){
    setAppInjector(injector);
  }
 }
