// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, OnDestroy } from '@angular/core';
import { KerviService } from '../kervi.service';
import { BehaviorSubject, Subject, Observable } from 'rxjs/Rx';
import { DashboardModel } from '../dashboards/models/dashboard.model'
import { DashboardsService } from '../dashboards/dashboards.service'
declare var jQuery: any;

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css'],

})

export class PageHeaderComponent implements OnInit, OnDestroy {
  public dashboards$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  private appSubscription: any;
  constructor(private dashboardsService: DashboardsService) {

  }

  ngOnInit() {
    var self = this;
    this.appSubscription = this.dashboardsService.getDashboards$().subscribe(function (v) {
        self.dashboards$.next(v);
      
    });
  }

  public toggleControllers() {
    console.log("tgc");
    var panelLeft = jQuery('.controllers-left-section');
    var panelRight = jQuery('.controllers-right-section');
    if (panelLeft.hasClass("visible")) {
      panelLeft.removeClass('visible').animate({ 'margin-left': '-350px' });
      panelRight.removeClass('visible').animate({ 'margin-right': '-350px' });
    } else {
      panelLeft.addClass('visible').animate({ 'margin-left': '0px' });
      panelRight.addClass('visible').animate({ 'margin-right': '0px' });
    }


  }

  ngOnDestroy() {
    this.appSubscription.unsubscribe();
  }

}
