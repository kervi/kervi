/*
 * Public API Surface of ngx-kervi
 */

export * from './lib/ngx-kervi.service';
export * from './lib/ngx-kervi-template.service'
//export { KerviValueComponent } from './lib/components/value/value.component'
//export { KerviComponent} from './lib/components/kervi-component/kervi-component.component';
//export { KerviComponentsModule } from './lib/components/components.module'
export { ConnectionState } from "kervi-js"
export { KerviDashboardComponent } from './lib/dashboard/kervi-dashboard.component'
export { KerviCamViewerComponent } from './lib/dashboard/kervi-cam-viewer.component'
export { KerviDashboardPanelComponent } from './lib/dashboard/kervi-dashboard-panel.component'
export { KerviControllerPadComponent } from './lib//dashboard/kervi-controller-pad.component'
export  { AppInjector } from './lib/app-injector.service'

export * from './lib/ngx-kervi.component';
export * from './lib/ngx-kervi.module';
export * from './lib/pipes/pipes.module';
