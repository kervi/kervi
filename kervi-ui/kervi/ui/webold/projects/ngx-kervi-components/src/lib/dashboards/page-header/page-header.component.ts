// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { DashboardsService } from '../dashboards.service';
import { BehaviorSubject, Subject, Observable } from 'rxjs/Rx';
import { DashboardModel } from '../../models/dashboard.model'
declare var jQuery: any;

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],

})

export class PageHeaderComponent implements OnInit, OnDestroy {
  @Input() dashboard:DashboardModel = null;
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
