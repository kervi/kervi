/*
 * Public API Surface of ngx-kervi
 */

export * from './lib/ngx-kervi.service';
export { KerviTemplateService } from './lib/ngx-kervi-template.service';
export { ConnectionState, DashboardSizes } from "kervi-js";
export { KerviDashboardComponent } from './lib/dashboard/kervi-dashboard.component';
export { KerviDashboardPanelComponent } from './lib/dashboard/kervi-dashboard-panel.component';
export { KerviControllerPadComponent } from './lib//dashboard/kervi-controller-pad.component';
export { KerviWidgetComponent } from './lib/dashboard/kervi-widget.component';
export { KerviNumberComponent } from './lib/values/kervi-number-value.component';
export { KerviBooleanComponent } from './lib/values/kervi-boolean-value.component';
export { KerviActionComponent } from './lib/actions/kervi-action.component';
export { KerviCameraComponent } from './lib/camera/kervi-camera.component';
export { KerviColorComponent } from './lib/values/kervi-color-value.component';
export { KerviDateTimeComponent } from './lib/values/kervi-datetime-value.component';
export { KerviStringComponent } from './lib/values/kervi-string-value.component';
export { KerviUserLogComponent } from './lib/user-log/user-log.component';
export { KerviDirectoryComponent } from './lib/files/kervi-directory.component';
export { KerviAppHealthComponent } from './lib/dashboard/app-health.component';

export  { AppInjector } from './lib/app-injector.service';

export * from './lib/ngx-kervi.component';
export * from './lib/ngx-kervi.module';
export * from './lib/pipes/pipes.module';
