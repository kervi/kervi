// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import {Component, ComponentFactory, NgModule, Input, Injectable} from '@angular/core';
import {RuntimeCompiler} from '@angular/compiler';
import { AppModule } from '../../app.module'
import { DashboardsModule} from '../dashboards.module'
import { SensorsModule} from '../../sensors/sensors.module'
import { ControllersModule} from '../../controllers/controllers.module'
import * as _ from 'lodash';

export interface IHaveDynamicData { 
    entity: any;
}

@Injectable()
export class DashboardDynamicTypeBuilder {

  constructor(
    protected compiler: RuntimeCompiler
  ) {}
    
  private _cacheOfFactories: {[templateKey: string]: ComponentFactory<IHaveDynamicData>} = {};
  
  public createComponentFactory(template: string)
    : Promise<ComponentFactory<IHaveDynamicData>> {

    let factory = this._cacheOfFactories[template];

    if (factory) {
        console.log("Module and Type are returned from cache")
       
        return new Promise((resolve) => {
            resolve(factory);
        });
    }
    
    let type   = this.createNewComponent(template);
    let module = this.createComponentModule(type);
    
    return new Promise((resolve) => {
        this.compiler
            .compileModuleAndAllComponentsAsync(module)
            .then((moduleWithFactories) =>
            {
                factory = _.find(moduleWithFactories.componentFactories, { componentType: type });
                this._cacheOfFactories[template] = factory;
                resolve(factory);
            });
    });
  }
  
  protected createNewComponent (tmpl:string) {
      @Component({
          selector: 'dynamic-component',
          template: tmpl,
      })
      class CustomDynamicComponent  implements IHaveDynamicData {
          @Input()  public entity: any;
      };
      return CustomDynamicComponent;
  }

  protected createComponentModule (componentType: any) {
      @NgModule({
        imports: [
          AppModule,
            DashboardsModule,
            SensorsModule,
            ControllersModule
        ],
        declarations: [
          componentType
        ],
      })
      class RuntimeComponentModule
      {
      }
      return RuntimeComponentModule;
  }
}