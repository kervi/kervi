// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input } from '@angular/core';
import { DashboardSizes, DashboardMessageModel, UserLogStateType } from 'kervi-js';
import { NGXKerviService } from '../ngx-kervi.service';
import { AppInjector } from '../app-injector.service';
import {  Observable } from 'rxjs';

@Component({
  selector: 'kervi-user-log-base',
  template: '',
  styleUrls: [],
})

export class KerviUserLogComponent {
    @Input() logLength = 10;
    @Input() linkParameters: any = null;
    @Input() inline = false;
    @Input() dashboardSizes: DashboardSizes = new DashboardSizes();
    protected kerviService: NGXKerviService;
    lastMessage$: Observable<DashboardMessageModel> = null;
    messages$: Observable<DashboardMessageModel[]> = null;
    messageCount$: Observable<number> = null;
    logState$: Observable<UserLogStateType> = null;
    public messageCount = 0;
    public UserLogState: UserLogStateType = UserLogStateType.normal;

    constructor() {
        this.kerviService = AppInjector.get(NGXKerviService);
        this.messages$ = this.kerviService.getLogMessages$();
        this.lastMessage$ = this.kerviService.getLastLogMessage$();
        this.messageCount$ = this.kerviService.getLogMessageCount$();
        this.logState$ = this.kerviService.getLogState$();
        this.messageCount$.subscribe(function(v){
          this.messageCount = v;
        });
    }

    protected ngOnInitUserLog() {

    }
}
