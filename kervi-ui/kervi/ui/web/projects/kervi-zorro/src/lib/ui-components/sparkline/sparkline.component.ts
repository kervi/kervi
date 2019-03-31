// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { NumberValue, DashboardSizes   } from 'kervi-js';
import { NGXKerviService, KerviTemplateService } from 'ngx-kervi';
import { asapScheduler } from 'rxjs';

declare var ApexCharts: any;

@Component({
  selector: 'value-sparkline',
  templateUrl: './sparkline.component.html',
  styleUrls: ['./sparkline.component.scss'],
})

export class SparklineComponent implements OnInit {
  @Input() value: NumberValue = null;
  @Input() linkParameters: any = null;
  @Input() type: string;
  @Input() size:number;
  @Input() dashboardSizes:DashboardSizes = new DashboardSizes();
  @ViewChild('chart') private chartElement: ElementRef;
  private series=[];
  private chartObj: any;
  private options:any;
  constructor(private kerviService:NGXKerviService, private templateService:KerviTemplateService ) {

  }

  private createElement(){
    this.series = [this.value.value]

    this.options ={
      chart: {
          height: 14,
          width:60,
          type: 'area',
          sparkline: {
            enabled: true
          }
      },
      stroke: {
        curve: 'straight',
        width:1
      },
      fill: {
        opacity: 0.3,
      },
      series: [{
        data: this.value.sparkline$.value
      }],
      yaxis: {
        min: 0
      },
      colors: ['#9fd037'],
    }
  
    if (this.chartObj) {
      this.chartObj.destroy();
    }
    console.log("create sparkline", this.value.id);
    this.chartObj = new ApexCharts(
      this.chartElement.nativeElement,
      this.options
    );
    this.chartObj.render();
  }

  

  private color(style,selector){
    return this.templateService.getColor(style,selector);
  }

  ngOnInit() {
    var self = this;
    asapScheduler.schedule(() => {
      this.createElement();
    });

    this.value.sparkline$.subscribe(function(v){
      if (self.chartObj && v){
        self.chartObj.updateSeries([{
          data: v
        }]);
      }
    });
  }
}