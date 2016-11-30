// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { SensorsService } from '../sensors.service';
import { BehaviorSubject, Subject } from 'rxjs/Rx';
import { SensorModel } from '../models/sensor.model';

@Component({
  selector: 'kervi-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent implements OnInit {
  @Input() dashboard: string;
  _sensors$: BehaviorSubject<SensorModel[]>;
  private sensorSubscription: any;
  constructor(private sensorsService: SensorsService) {
    var self = this;
    this._sensors$ = new BehaviorSubject<SensorModel[]>([]);

    //var sensors=kerviService.Sensors("core");
  }

  public sensors$() {
    return this._sensors$.asObservable();
  }

  ngOnInit() {
    var self = this;
    this.sensorSubscription = this.sensorsService.getSensors$().subscribe(function (v) {
      console.log("core sensors ready", v);
      self._sensors$.next(self.sensorsService.getDashboardSensors(self.dashboard));

    });

  }

  ngOnDestroy() {
    this.sensorSubscription.unsubscribe();
  }

}
