// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControllersComponent } from './controllers/controllers.component';
import { ControllerComponent } from './controller/controller.component';
import { ControllersService } from './controllers.service';
import { ControllerNumberInputComponent } from './controller-number-input/controller-number-input.component';
import { ControllerTextInputComponent } from './controller-text-input/controller-text-input.component';
import { ControllerButtonComponent } from './controller-button/controller-button.component';
import { ControllerSwitchButtonComponent } from './controller-switchbutton/controller-switchbutton.component';
import { ControllerSelectComponent } from './controller-select/controller-select.component'
import { ControllerDateTimeComponent } from './controller-datetime/controller-datetime.component'
import { ControllerLayout} from './controller-layout/controller-layout.component'
import { LayoutControllerComponent} from './controller-layout/layout-controller-component.component';
import { CamViewerComponent } from './cam-viewer/cam-viewer.component'
import { DynamicTypeBuilder} from './controller-layout/type.builder';
import { COMPILER_PROVIDERS } from '@angular/compiler';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ControllersComponent,
    ControllerComponent,
    ControllerNumberInputComponent,
    ControllerTextInputComponent,
    ControllerButtonComponent,
    ControllerSwitchButtonComponent,
    ControllerSelectComponent,
    ControllerDateTimeComponent,
    ControllerLayout,
    LayoutControllerComponent,
    CamViewerComponent
  ],
  providers: [ControllersService, DynamicTypeBuilder,COMPILER_PROVIDERS],
  declarations: [
    ControllersComponent,
    ControllerComponent,
    ControllerNumberInputComponent,
    ControllerTextInputComponent,
    ControllerButtonComponent,
    ControllerSwitchButtonComponent,
    ControllerSelectComponent,
    ControllerDateTimeComponent,
    ControllerLayout,
    LayoutControllerComponent,
    CamViewerComponent
    ]
})
export class ControllersModule { }
