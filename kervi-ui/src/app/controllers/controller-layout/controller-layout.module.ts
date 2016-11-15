import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from '../../app.module'
import { ControllersModule} from '../controllers.module'

// parts module

// detail stuff
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
            providers: [ // singletons accross the whole app
              DynamicTypeBuilder
            ], 
        };
    }
}