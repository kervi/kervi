import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from '../../app.module'
import { DashboardsModule} from '../dashboards.module'

// parts module

// detail stuff
import { DashboardLayout }          from './dashboard-layout.component';
import { DashboardDynamicTypeBuilder }     from './dashboard-type.builder';

@NgModule({
  imports:      [ AppModule, DashboardsModule  ],
  declarations: [ DashboardLayout ],
  exports:      [ DashboardLayout],
})

export class DynamicModule {

    static forRoot()
    {
        return {
            ngModule: DynamicModule,
            providers: [ // singletons accross the whole app
              DashboardDynamicTypeBuilder
            ], 
        };
    }
}