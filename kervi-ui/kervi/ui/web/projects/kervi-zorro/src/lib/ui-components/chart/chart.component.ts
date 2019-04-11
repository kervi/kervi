// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { NumberValue, DashboardSizes   } from 'kervi-js';
import { NGXKerviService, KerviTemplateService } from 'ngx-kervi';
import { asapScheduler } from 'rxjs';

declare var ApexCharts: any;

@Component({
  selector: 'kervi-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})

export class KerviChartComponent implements OnInit {
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
    this.series= [
    {
        name: this.value.name,
        data: [ ]
    }]

    
    this.options ={
      chart: {
          id: "chart_" + this.value.id,
          width:"100%",
          height:300,
          type: this.linkParameters.chartType,
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 100
            }
          },
          toolbar: {
            show: false,
            tools: {
              download: true,
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: true ,
              customIcons: []
            },
            autoSelected: 'zoom' 
          },
          zoom: {
            enabled: true
          }
        },
      dataLabels: {
          enabled: false
        },
      stroke: {
          curve: 'smooth',
          width:1
        },

      title: {
          text: this.linkParameters.chartTitle,
          align: 'left'
        },
      markers: {
          size: 0
        },
      xaxis: {
          type: 'datetime',
          //range: 1552983230 - 300,
      },
      yaxis: {
          max: this.value.maxValue,
          min:this.value.minValue
        },
      legend: {
          show: false
      },
      grid: {
        show: this.linkParameters.chartGrid,
        xaxis: {
          lines: {
            show: true,
            animate: true
          }
        },
        yaxis: {
          lines: {
            show: true,
            animate: true
          }
        }
      },
      colors: [this.color("color",".kervi-chart")],// ['#9fd037'],
      series: this.series
    }
  
    if (this.chartObj) {
      this.chartObj.destroy();
    }

    if (!this.linkParameters.chartTitle)
      delete(this.options["title"]);

    console.log("create chart", this.value.id);
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

    this.value.value$.subscribe(function(v){
      if (self.chartObj){
        self.series[0].data.push([ self.value.valueTS.getTime(), v ]);
        self.chartObj.updateSeries( self.series);
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