// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input } from '@angular/core';
import { DashboardSizes, DashboardMessageModel, UserLogStateType } from 'kervi-js';
import { NGXKerviService } from '../ngx-kervi.service';
import { AppInjector } from '../app-injector.service';
import {  Observable } from 'rxjs';

@Component({
  selector: 'kervi-app-health-base',
  template: '',
  styleUrls: [],
})

export class KerviAppHealthComponent {
    @Input() linkParameters: any = null;
    @Input() inline = false;
    @Input() dashboardSizes: DashboardSizes = new DashboardSizes();
    @Input() mps = 0;
    @Input() pingDiff = 0;
    @Input() pingDelay = 0;
    protected kerviService: NGXKerviService;

    constructor() {
        this.kerviService = AppInjector.get(NGXKerviService);
    }

    protected ngOnInitAppHealth() {
      const self = this;
      this.kerviService.mps$.subscribe(function(mps) {
        self.mps = mps;
      });

      this.kerviService.appPingDiff$.subscribe(function(diff) {
        self.pingDiff = diff;
      });

      this.kerviService.appPingDelay$.subscribe(function(diff) {
        self.pingDelay = diff;
      });
    }
}
