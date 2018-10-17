// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionComponent } from './action/action.component';
import { RouterModule } from '@angular/router';
import { ValuesModule } from '../values/values.module'
import { UIComponentsModule} from '../ui-components/ui-components.module'
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ValuesModule,
    UIComponentsModule
  ],
  exports:[
    ActionComponent
  ],
  providers: [ ],
  declarations: [
    ActionComponent
    
    ]
})
export class ActionsModule { }
