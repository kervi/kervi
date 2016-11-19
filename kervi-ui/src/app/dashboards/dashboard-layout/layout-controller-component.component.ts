import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ControllerModel, IControllerComponent } from '../../controllers/models/controller.model'
import { ControllersService } from '../../controllers/controllers.service'
declare var jQuery: any;

@Component({
  selector: 'controller-component',
  templateUrl: './layout-controller-component.component.html',
  styleUrls: []
})
export class LayoutControllerComponent implements OnInit {
  @Input() id:string;
  @Input() dashboardType: string;
  component:IControllerComponent;
  constructor(private controllersService:ControllersService) {
      console.log("lcc constructor",this.id);
      
   }

  ngOnInit() {
    console.log('lcc',this.id);
    if (this.id){
      this.component=this.controllersService.getControllerComponent(this.id);
      console.log("lcc c",this.component);
    }
  }


}