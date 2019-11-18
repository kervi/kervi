import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { NumberComponent} from './number-value/number-value.component'
import { NGXKerviPipesModule  } from 'ngx-kervi'
import { BooleanComponent} from './boolean-value/boolean-value.component'
import { StringComponent} from './string-value/string-value.component'
import { DateTimeComponent} from './datetime-value/datetime-value.component'
import { ColorComponent} from './color-value/color-value.component'
// import { EnumComponent} from './enum-value/enum-value.component'
import { UIComponentsModule} from '../ui-components/ui-components.module'
import { KerviValueComponent } from './kervi-value/kervi-value.component'
import { FormsModule }    from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
@NgModule({
  declarations: [
    NumberComponent,
    BooleanComponent,
    KerviValueComponent,
    StringComponent,
    //EnumComponent,
    DateTimeComponent,
    ColorComponent
  ],
  exports:[
      NumberComponent,
      BooleanComponent,
      KerviValueComponent,
      StringComponent,
      //EnumComponent,
      DateTimeComponent,
      ColorComponent
  ],
  imports: [
    CommonModule,
    NGXKerviPipesModule,
    UIComponentsModule,
    FormsModule,
    NgZorroAntdModule
  ],
  providers: [],
  bootstrap: []
})
export class ValuesModule {
  constructor (){}
}
