// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { KerviComponent } from './kervi-component/kervi-component.component'
import { KerviValueComponent } from './value/value.component'
import {  KerviComponentIcon, KerviComponentValue, KerviComponentLabel, KerviComponentValueIcon,  KerviComponentValueUnit} from './kervi-component/kervi-component.directives'
@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports:[
    KerviComponent,
    KerviValueComponent,
    KerviComponentIcon,
    KerviComponentLabel,
    KerviComponentValue,
    KerviComponentValueIcon,
    KerviComponentValueUnit
  ],
  providers: [ ],
  declarations: [
    KerviComponent,
    KerviValueComponent,
    KerviComponentIcon,
    KerviComponentLabel,
    KerviComponentValue,
    KerviComponentValueIcon,
    KerviComponentValueUnit
    
    ]
})
export class KerviComponentsModule { }
