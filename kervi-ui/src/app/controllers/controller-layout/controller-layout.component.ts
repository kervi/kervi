// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Input, Component, ComponentRef,ViewChild,ViewContainerRef}   from '@angular/core';
import { AfterViewInit,OnInit,OnDestroy}          from '@angular/core';
import { OnChanges,SimpleChange,ComponentFactory} from '@angular/core';

import { IHaveDynamicData, DynamicTypeBuilder } from './type.builder';
import {ControllerModel} from '../models/controller.model'

@Component({
  selector: 'controller-layout',
  template: `
  <div #dynamicContentPlaceHolder></div>
`,
})
export class ControllerLayout implements AfterViewInit, OnChanges, OnDestroy
{ 
    @Input() controller:ControllerModel;
    @ViewChild('dynamicContentPlaceHolder', {read: ViewContainerRef}) 
    protected dynamicComponentTarget: ViewContainerRef;
    protected componentRef: ComponentRef<IHaveDynamicData>;
    protected wasViewInitialized = false;

    constructor(
        protected typeBuilder: DynamicTypeBuilder,        
    ) {}

    protected refreshContent(){
      if (!this.controller.template)
        return;

      if (this.componentRef) {
          this.componentRef.destroy();
      }
      var template = this.controller.template;
      this.typeBuilder
          .createComponentFactory(template)
          .then((factory: ComponentFactory<IHaveDynamicData>) =>
        {
            this.componentRef = this
                .dynamicComponentTarget
                .createComponent(factory);

            let component = this.componentRef.instance;

        });
    }

    public ngAfterViewInit(): void
    {
        this.wasViewInitialized = true; 

        //this.refreshContent();
    }
    
    public ngOnChanges(changes: {[key: string]: SimpleChange}): void
    {
        console.log("NGOC",changes);
        if (this.wasViewInitialized) {
            return;
        }
        this.refreshContent();
    }
    public ngOnDestroy(){
      if (this.componentRef) {
          this.componentRef.destroy();
          this.componentRef = null;
      }
    }
}



