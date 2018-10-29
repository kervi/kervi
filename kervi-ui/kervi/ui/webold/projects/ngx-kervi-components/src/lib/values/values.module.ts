import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicNumberComponent} from './number-value/number-value.component'
import { DynamicBooleanComponent} from './boolean-value/boolean-value.component'
import { DynamicStringComponent} from './string-value/string-value.component'
import { DynamicDateTimeComponent} from './datetime-value/datetime-value.component'
import { DynamicColorComponent} from './color-value/color-value.component'
import { DynamicEnumComponent} from './enum-value/enum-value.component'
import { DynamicValueComponent} from './dynamic-value/dynamic-value.component'
import { UIComponentsModule} from '../ui-components/ui-components.module'
@NgModule({
  declarations: [
    DynamicNumberComponent,
    DynamicValueComponent,
    DynamicBooleanComponent,
    DynamicStringComponent,
    DynamicEnumComponent,
    DynamicDateTimeComponent,
    DynamicColorComponent
  ],
  exports:[
      DynamicNumberComponent,
      DynamicValueComponent,
      DynamicBooleanComponent,
      DynamicStringComponent,
      DynamicEnumComponent,
      DynamicDateTimeComponent,
      DynamicColorComponent
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
