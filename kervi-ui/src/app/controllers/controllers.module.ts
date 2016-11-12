import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControllersComponent } from './controllers/controllers.component';
import { ControllerComponent } from './controller/controller.component';
import { ControllersService } from './controllers.service';
import { ControllerInputComponent } from './controller-input/controller-input.component';
import { ControllerButtonComponent } from './controller-button/controller-button.component';
import { ControllerSwitchButtonComponent } from './controller-switchbutton/controller-switchbutton.component';
import { ControllerLayout} from './controller-layout/controller-layout.component'
import { LayoutControllerComponent} from './controller-layout/layout-controller-component.component';
import { CamViewerComponent } from './cam-viewer/cam-viewer.component'
@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    ControllersComponent,
    ControllerComponent,
    ControllerInputComponent,
    ControllerButtonComponent,
    ControllerSwitchButtonComponent,
    ControllerLayout,
    LayoutControllerComponent,
    CamViewerComponent
  ],
  providers: [ControllersService],
  declarations: [
    ControllersComponent,
    ControllerComponent,
    ControllerInputComponent,
    ControllerButtonComponent,
    ControllerSwitchButtonComponent,
    ControllerLayout,
    LayoutControllerComponent,
    CamViewerComponent
    ]
})
export class ControllersModule { }
