// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from '../../app.module'
import { ControllersModule} from '../controllers.module'

import { ControllerLayout }          from './controller-layout.component';
import { DynamicTypeBuilder }     from './type.builder';

@NgModule({
  imports:      [ AppModule, ControllersModule  ],
  declarations: [ ControllerLayout ],
  exports:      [ ControllerLayout],
})

export class DynamicModule {

    static forRoot()
    {
        return {
            ngModule: DynamicModule,
            providers: [
              DynamicTypeBuilder
            ], 
        };
    }
}