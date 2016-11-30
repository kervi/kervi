// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, OnDestroy } from '@angular/core';
import { SensorsService } from '../sensors.service';
import { BehaviorSubject, Subject } from 'rxjs/Rx';
import { SensorModel } from '../models/sensor.model';

@Component({
  selector: 'core-sensors',
  templateUrl: './core-sensors.component.html',
  styleUrls: ['./core-sensors.component.css'],

})
export class CoreSensorsComponent implements OnInit, OnDestroy {
  _sensors$: BehaviorSubject<SensorModel[]>;
  private sensorSubscription: any;
  constructor(private sensorsService: SensorsService) {
    var self = this;
    this._sensors$ = new BehaviorSubject<SensorModel[]>([]);
  }

  public sensors$() {
    return this._sensors$.asObservable();
  }

  ngOnInit() {
    var self = this;
    this.sensorSubscription = this.sensorsService.getSensors$().subscribe(function (v) {
      console.log("core sensors ready", v);
      self._sensors$.next(self.sensorsService.getDashboardSensors("cpu"));

    });

  }

  ngOnDestroy() {
    this.sensorSubscription.unsubscribe();
  }

}
