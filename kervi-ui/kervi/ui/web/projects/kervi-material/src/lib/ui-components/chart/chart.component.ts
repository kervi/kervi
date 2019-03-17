// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input } from '@angular/core';
import { NumberValue, DashboardSizes   } from 'kervi-js';
import { NGXKerviService, KerviTemplateService } from 'ngx-kervi';
import { ApexOptions} from 'ng-apexcharts/public_api'
@Component({
  selector: 'kervi-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})

export class ChartComponent implements OnInit {
  @Input() value: NumberValue = null;
  @Input() linkParameters: any = null;
  @Input() type: string;
  @Input() size:number;
  @Input() dashboardSizes:DashboardSizes = new DashboardSizes();
  data=[];
  chartOptions={};
  title="test chart";
  constructor(private kerviService:NGXKerviService, private templateService:KerviTemplateService ) {  
    
  }

  private color(style,selector){
    return this.templateService.getColor(style,selector);
    
  }

  

  ngOnInit() {
    var self = this;

    this.chartOptions =  {
      chart: {
        type: 'area',
        stacked: false,
        height: 350,
        zoom: {
          type: 'x',
          enabled: true
        },
        toolbar: {
          autoSelected: 'zoom'
        }
      },
      dataLabels: {
        enabled: false
      },
      series: [{
        name: 'XYZ MOTORS',
        data: this.data
      }],
      markers: {
        size: 0,
      },
      title: {
        text: 'Stock Price Movement',
        align: 'left'
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100]
        },
      },
      yaxis: {
        min: this.value.maxValue,
        max: this.value.minValue,
        
        title: {
          text: 'Price'
        },
      },
      xaxis: {
        type: 'datetime',
      },

      tooltip: {
        shared: false,
        
      }
    }


    
    
      
      this.value.value$.subscribe(function(v){
        var ds=self.data;
        ds.push([ self.value.valueTS, v ])
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