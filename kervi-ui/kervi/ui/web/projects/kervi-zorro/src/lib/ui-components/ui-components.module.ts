import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NGXKerviPipesModule  } from 'ngx-kervi';
import { SparklineComponent } from './sparkline/sparkline.component';
import { SliderComponent } from './slider/slider.component';
import { GaugeComponent } from './gauge/gauge.component';
import { KerviChartComponent } from './chart/chart.component';
import { SwitchButtonComponent} from './switch-button/switch-button.component';
import { ButtonComponent} from './button/button.component';
import { MPEGViewerComponent } from './mpeg-viewer/mpeg-viewer.component';
import { DateTimeComponent } from './datetimepicker/datetimepicker.component';
import { IconsComponent } from './icons/icons.component';
import { NgxGaugeModule } from 'ngx-gauge';
import { ColorComponent } from './color/color.component';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ColorPickerModule } from 'ngx-color-picker';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    SparklineComponent,
    SliderComponent,
    IconsComponent,
    GaugeComponent,
    KerviChartComponent,
    SwitchButtonComponent,
    ButtonComponent,
    MPEGViewerComponent,
    DateTimeComponent,
    ColorComponent
  ],
  exports:[
      SparklineComponent,
      SliderComponent,
      IconsComponent,
      MPEGViewerComponent,
      GaugeComponent,
      KerviChartComponent,
      SwitchButtonComponent,
      ButtonComponent,
      DateTimeComponent,
      ColorComponent
  ],
  imports: [
    BrowserModule,
    NGXKerviPipesModule,
    CommonModule,
    NgxGaugeModule,
    FormsModule,
    NgZorroAntdModule,
    NgApexchartsModule,
    ColorPickerModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: []
})
export class UIComponentsModule {
  constructor () {}
}
