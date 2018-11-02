import { NgModule, Injector } from '@angular/core';
import { NgxKerviComponent } from './ngx-kervi.component';
import { KerviDashboardComponent } from './dashboard/dashboard.component';
import { setAppInjector } from "./app-injector.service";
import { KerviDashboardSectionComponent } from './kervi-dashboard-section/kervi-dashboard-section.component';
import { KerviCamViewerComponent } from './kervi-cam-viewer/kervi-cam-viewer.component';
import { KerviControllerPadComponent } from './kervi-controller-pad/kervi-controller-pad.component'
@NgModule({
  imports: [
  ],
  declarations: [
    NgxKerviComponent,
    KerviDashboardComponent,
    KerviDashboardSectionComponent,
    KerviCamViewerComponent,
    KerviControllerPadComponent,
    
  ],
  exports: [
    NgxKerviComponent,
    KerviDashboardComponent,
    KerviDashboardSectionComponent,
    KerviCamViewerComponent,
    KerviControllerPadComponent,
  ]
})
export class NgxKerviModule {
  constructor(private injector:Injector){
    setAppInjector(injector);
  }
 }
