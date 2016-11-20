import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControllersComponent } from './controllers/controllers.component';
import { ControllerComponent } from './controller/controller.component';
import { ControllersService } from './controllers.service';
import { ControllerInputComponent } from './controller-input/controller-input.component';
import { ControllerButtonComponent } from './controller-button/controller-button.component';
import { ControllerSwitchButtonComponent } from './controller-switchbutton/controller-switchbutton.component';
import { ControllerSelectComponent } from './controller-select/controller-select.component'
import { ControllerLayout} from './controller-layout/controller-layout.component'
import { LayoutControllerComponent} from './controller-layout/layout-controller-component.component';
import { CamViewerComponent } from './cam-viewer/cam-viewer.component'
import { DynamicTypeBuilder} from './controller-layout/type.builder';
import { COMPILER_PROVIDERS } from '@angular/compiler';

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
    ControllerSelectComponent,
    ControllerLayout,
    LayoutControllerComponent,
    CamViewerComponent
  ],
  providers: [ControllersService, DynamicTypeBuilder,COMPILER_PROVIDERS],
  declarations: [
    ControllersComponent,
    ControllerComponent,
    ControllerInputComponent,
    ControllerButtonComponent,
    ControllerSwitchButtonComponent,
    ControllerSelectComponent,
    ControllerLayout,
    LayoutControllerComponent,
    CamViewerComponent
    ]
})
export class ControllersModule { }
