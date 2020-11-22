// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { NumberValue, DashboardSizes   } from 'kervi-js';
import { NGXKerviService, KerviTemplateService } from 'ngx-kervi';
import { asapScheduler } from 'rxjs';

declare var ApexCharts: any;

@Component({
  selector: 'kervi-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss'],
})

export class GaugeComponent implements OnInit {
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
        type: 'radialBar',
        height: this.linkParameters.gaugeSize
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle:135,  
          hollow: {
            size: '70%',
          },
          
          track:{
            startAngle: -135,
            endAngle: 135,
          },
          dataLabels: {
            name: {
              show: true,
              color: this.color("color",".kervi-gauge-text"),
              fontSize:"14px"
            },
            value: {
              fontSize: "24px",
              color: this.color("color",".kervi-gauge-text"),
              show: true
            }
          }
        } 
      },
      colors: [this.color("color",".kervi-gauge")],// ['#9fd037'],
      series: this.series,
      stroke: {
        lineCap: "round"
      },
      labels: [this.value.name],

    }
  
    if (this.chartObj) {
      this.chartObj.destroy();
    }
    console.log("create gauge", this.value.id);
    this.chartObj = new ApexCharts(
      this.chartElement.nativeElement,
      this.options
    );
    this.chartObj.render();
  }

  public render(): Promise<void> {
    return this.chartObj.render();
  }

  private color(style,selector){
    return this.templateService.getColor(style,selector);
  }

  ngOnInit() {
    var self = this;
    asapScheduler.schedule(() => {
      this.createElement();
    });

    this.value.value$.subscribe(function(v){
      if (self.chartObj && v){
        // console.log("gv", v);
        self.chartObj.updateSeries( [v]);
      }
    });
  }

  public loadPeriod(){
    var self = this;
    //console.log("lp", this.periodStart, this.periodEnd);
    //this.kerviService.spine.sendQuery("getSensorData", this.value.id, this.periodStart.toISOString(), this.periodEnd.toISOString(), function (results) {
        //console.log("gsd", results);
        //var sensorData = results;
        //self.chartData.length = 0;
        //for (var i = 0; (i < sensorData.length); i++) {
          //var dataItem = sensorData[i]
          //self.chartData.push({ x: new Date(dataItem.ts + " utc"), y: dataItem.value });
        //}
        //self.chart.render();
        //self.chart.update();
    //});
  }

  private cleanData(){
    // if(this.updateChart){
    //   var doClean = true;
    //   var limitTS = this.getPeriodLimit();
    //   var ds = this.chart.data.datasets[0].data
    //   while ( ds.length>0 && doClean){
    //     if (ds[0].x < limitTS)
    //       ds.shift();
    //     else
    //       doClean = false
    //   }
    // }
  }
}