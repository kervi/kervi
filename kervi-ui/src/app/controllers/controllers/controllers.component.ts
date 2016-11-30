// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ControllerModel } from '../models/controller.model'
import { ControllersService } from '../controllers.service'
import { Observable, BehaviorSubject } from 'rxjs/Rx';
declare var jQuery: any;

@Component({
  selector: 'kervi-controllers',
  templateUrl: './controllers.component.html',
  styleUrls: ['./controllers.component.css']
})
export class ControllersComponent implements OnInit, OnDestroy {
  @Input() dashboard: string;
  @Input() dashboardType: string;
  controllerTypes$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  controllers$: BehaviorSubject<ControllerModel[]> =new BehaviorSubject<ControllerModel[]>([])
  private ctSubscription: any;
  constructor(private controllersService: ControllersService) {



  }



  public getControllers(type) {
    return this.controllersService.getDashboardControllers(this.dashboard, type);
  }

  ngOnInit() {
    var self = this;
    this.ctSubscription = this.controllersService.getControllerTypes$().subscribe(function (v) {
      var r = [];
      for (let s of v) {
        var cl = self.controllersService.getDashboardControllers(self.dashboard, s);
        console.log("cs", self.dashboard, s, cl);
        if (cl.length) {
          r.push(s);
        }
      }
      self.controllerTypes$.next(r);
    });


    this.controllersService.getControllers$().subscribe(function(v){
        self.controllers$.next(self.controllersService.getDashboardControllers(self.dashboard));
    });


    setTimeout(function () {
      jQuery(".controllers-left-section").on('shown.bs.tab', function (event) {
        console.log("spc c", event);
        var rightId = event.target.dataset.idright;
        var panelRight = jQuery('.controllers-right-section');
        console.log("spc d", rightId, panelRight);
        jQuery(".tab-pane", '.controllers-right-section').removeClass("active");
        jQuery(rightId).addClass("active");

        /*workaround for bug in BST 4 */
        if (event.relatedTarget) {
            jQuery(event.relatedTarget).removeClass('active');
        }

      });
    });
  }

  ngOnDestroy() {
    this.ctSubscription.unsubscribe();
  }

}
