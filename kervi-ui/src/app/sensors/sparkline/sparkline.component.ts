// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input, OnInit, ElementRef,ChangeDetectionStrategy } from '@angular/core';
import { SensorModel} from '../models/sensor.model'
declare var jQuery:any;

@Component({
  selector: 'sensor-sparkline',
  templateUrl: './sparkline.component.html',
  styleUrls: ['./sparkline.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SparklineComponent implements OnInit {
  @Input() public sensor:SensorModel;
  constructor(private elementRef:ElementRef) { 

  }

  ngOnInit() {
    var self=this;
    this.sensor.sparkline$.subscribe(function(v){
      jQuery(self.elementRef.nativeElement).sparkline(v, { type: 'line', height:20 });
    });
    
  }
}
