// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ControllerModel, IControllerComponent } from '../../controllers/models/controller.model'
import { ControllersService } from '../../controllers/controllers.service'
declare var jQuery: any;

@Component({
  selector: 'controller',
  templateUrl: './layout-controller.component.html',
  styleUrls: []
})
export class LayoutControllerComponent implements OnInit {
  @Input() id:string;
  @Input() dashboardType: string;
  controller:ControllerModel;
  constructor(private controllersService:ControllersService) {
      console.log("lcc constructor",this.id);
      
   }

  ngOnInit() {
    console.log('lcc',this.id);
    if (this.id){
      this.controller=this.controllersService.getControllerById(this.id);
      console.log("lcc c",this.controller);
    }
  }


}
