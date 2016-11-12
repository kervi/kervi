import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ControllerModel, IControllerComponent } from '../models/controller.model'
import { ControllersService } from '../controllers.service'
declare var jQuery: any;

@Component({
  selector: 'controller-componentx',
  templateUrl: './controller-component.component.html',
  styleUrls: []
})
export class LayoutControllerComponent implements OnInit {
  @Input() id:string;
  @Input() dashboardType: string;
  component:IControllerComponent;
  constructor(private controllersService:ControllersService) {

   }

  ngOnInit() {
    this.component=this.controllersService.getControllerComponent(this.id);
  }


}
