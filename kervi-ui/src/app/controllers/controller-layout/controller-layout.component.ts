import {AfterViewInit, Compiler, Component, NgModule, ViewChild,ViewContainerRef, Input} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {ControllersService} from '../controllers.service'
import {ControllerModel} from '../models/controller.model'
@Component({
  selector: 'controller-layout',
  template: `<div #container></div>`,
})
export class ControllerLayout implements AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;
  @Input() controller:ControllerModel;

  constructor(private compiler: Compiler, private controllerService:ControllersService) {}

  ngAfterViewInit() {
    this.addComponent(this.controller.template);
  }
  
  private addComponent(template: string) {
    @Component({template: template})
    class TemplateComponent {}

    @NgModule({declarations: [TemplateComponent]})
    class TemplateModule {}

    const mod = this.compiler.compileModuleAndAllComponentsSync(TemplateModule);
    const factory = mod.componentFactories.find((comp) =>
      comp.componentType === TemplateComponent
    );
    const component = this.container.createComponent(factory);
  }
}