import { NgModule } from '@angular/core';
import { SparklineComponent } from './sparkline/sparkline.component';
import { SliderComponent } from './slider/slider.component';
import { GaugeComponent } from './gauge/gauge.component';
import { ChartComponent } from './chart/chart.component'
import { CommonModule } from '@angular/common';
import { SwitchButtonComponent} from './switch-button/switch-button.component';
import { ButtonComponent} from './button/button.component';
import { CamViewerComponent } from './cam-viewer/cam-viewer.component';
import { MPEGViewerComponent } from './mpeg-viewer/mpeg-viewer.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component'; 
import { ActionComponent } from './action/action.component';
import { DateTimeComponent } from './datetimepicker/datetimepicker.component';
import { IconsComponent } from './icons/icons.component';
import { NgxGaugeModule } from 'ngx-gauge';
import { ColorComponent } from './color/color.component';
import { KerviPipesModule } from '../pipes/pipes.module'

@NgModule({
  declarations: [
    SparklineComponent,
    SliderComponent,
    GaugeComponent,
    ChartComponent,
    SwitchButtonComponent,
    ButtonComponent,
    CamViewerComponent,
    MPEGViewerComponent,
    ImageViewerComponent,
    ActionComponent,
    DateTimeComponent,
    IconsComponent,
    ColorComponent
  ],
  exports:[
      SparklineComponent,
      SliderComponent,
      GaugeComponent,
      ChartComponent,
      SwitchButtonComponent,
      ButtonComponent,
      CamViewerComponent,
      ActionComponent,
      DateTimeComponent,
      ColorComponent
  ],
  imports: [
    CommonModule,
    NgxGaugeModule,
    KerviPipesModule
  ],
  providers: [],
  bootstrap: []
})
export class UIComponentsModule {
  constructor (){}
}
