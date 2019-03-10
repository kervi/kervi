import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {InputSwitchModule} from 'primeng/inputswitch';
import {SliderModule} from 'primeng/slider';
import {InputTextModule} from 'primeng/inputtext';
import { NGXKerviPipesModule  } from 'ngx-kervi'
import { SparklineComponent } from './sparkline/sparkline.component';
import { SliderComponent } from './slider/slider.component';
import { GaugeComponent } from './gauge/gauge.component';
import { ChartComponent } from './chart/chart.component'
//import { CommonModule } from '@angular/common';
import { SwitchButtonComponent} from './switch-button/switch-button.component';
import { ButtonComponent} from './button/button.component';
//import { CamViewerComponent } from './cam-viewer/cam-viewer.component';
import { MPEGViewerComponent } from './mpeg-viewer/mpeg-viewer.component';
//import { ImageViewerComponent } from './image-viewer/image-viewer.component'; 
//import { ActionComponent } from './action/action.component';
import { DateTimeComponent } from './datetimepicker/datetimepicker.component';
import { IconsComponent } from './icons/icons.component';
import { NgxGaugeModule } from 'ngx-gauge';
import { ColorComponent } from './color/color.component';
import { FormsModule }    from '@angular/forms';

@NgModule({
  declarations: [
    SparklineComponent,
    SliderComponent,
    IconsComponent,
    GaugeComponent,
    ChartComponent,
    SwitchButtonComponent,
    ButtonComponent,
    //CamViewerComponent,
    MPEGViewerComponent,
    //ImageViewerComponent,
    //ActionComponent,
    DateTimeComponent,
    ColorComponent
  ],
  exports:[
      SparklineComponent,
      SliderComponent,
      IconsComponent,
      MPEGViewerComponent,
      GaugeComponent,
      ChartComponent,
      SwitchButtonComponent,
      ButtonComponent,
      //CamViewerComponent,
      //ActionComponent,
      DateTimeComponent,
      ColorComponent
  ],
  imports: [
    BrowserModule,
    NGXKerviPipesModule,
    CommonModule,
    NgxGaugeModule,
    InputSwitchModule,
    ToggleButtonModule,
    SliderModule,
    InputTextModule,
    ButtonModule,
    FormsModule
    //KerviPipesModule
  ],
  providers: [],
  bootstrap: []
})
export class UIComponentsModule {
  constructor (){}
}
