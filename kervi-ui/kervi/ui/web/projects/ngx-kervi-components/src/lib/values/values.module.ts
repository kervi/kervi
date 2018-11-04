import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberComponent} from './number-value/number-value.component'
import { BooleanComponent} from './boolean-value/boolean-value.component'
import { StringComponent} from './string-value/string-value.component'
import { DateTimeComponent} from './datetime-value/datetime-value.component'
import { ColorComponent} from './color-value/color-value.component'
import { EnumComponent} from './enum-value/enum-value.component'
import { ValueComponent} from './dynamic-value/dynamic-value.component'
import { UIComponentsModule} from '../ui-components/ui-components.module'
@NgModule({
  declarations: [
    NumberComponent,
    ValueComponent,
    BooleanComponent,
    StringComponent,
    EnumComponent,
    DateTimeComponent,
    ColorComponent
  ],
  exports:[
      NumberComponent,
      ValueComponent,
      BooleanComponent,
      StringComponent,
      EnumComponent,
      DateTimeComponent,
      ColorComponent
  ],
  imports: [
    UIComponentsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ValuesModule {
  constructor (){}
}
