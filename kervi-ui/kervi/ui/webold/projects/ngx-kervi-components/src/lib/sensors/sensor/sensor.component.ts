// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { SensorModel } from '../../models/sensor.model';
import { DashboardSectionModel } from '../../models/dashboard.model';
import { KerviService } from '../../kervi.service';
import { TemplateService } from '../../template.service';
declare var LinearGauge:any;
declare var RadialGauge:any;
declare var jQuery:any;
declare var Chart:any;
@Component({
  selector: 'kervi-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SensorComponent implements OnInit {
  @Input() sensor: SensorModel = null;
  @Input() parameters: any = null;
  @Input() dashboardSection: DashboardSectionModel = null;
  @Input() inline:boolean = false;
  constructor(private kerviService:KerviService, private templateService:TemplateService ) { 
    
  }

  ngOnInit() {
  }
  
}