// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { DynamicNumberModel, DynamicRange, DynamicRangeType  } from '../../models/dynamicValues.model';
import { DashboardSectionModel, DashboardSizes } from '../../models/dashboard.model';
import { KerviService } from '../../kervi.service';
import { TemplateService } from '../../template.service';
declare var jQuery:any;
declare var Chart:any;
@Component({
  selector: 'kervi-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChartComponent implements OnInit {
  @Input() value: DynamicNumberModel = null;
  @Input() parameters: any = null;
  @Input() type: string;
  @Input() size:number;
  @Input() defaultSizes:DashboardSizes = new DashboardSizes();
  private  unitSize:number = 150;
  canvasId:string="";
  private chart:any=null;
  private chartData = [];
  selectedPeriodText:string = "Hourx";
  selectedPeriod:string = "hour";
  periodStart: Date = null;
  periodEnd: Date = null;
  updateChart:boolean = true;
  constructor(private kerviService:KerviService, private templateService:TemplateService ) {  
  }

  private color(style,selector){
    return this.templateService.getColor(style,selector);
  }

  

  ngOnInit() {
    var self = this;
    this.setSelectedPeriodText(self.parameters.chartInterval);
    this.canvasId=this.templateService.makeId();
      
      this.value.value$.subscribe(function(v){
        if (self.chart){
          try{
            if (self.updateChart){
              var ds=self.chart.data.datasets[0].data;
              self.periodEnd = self.value.valueTS;
              ds.push({ x: self.value.valueTS, y: v })
              self.cleanData();
              self.chart.render();  
              self.chart.update();
            }
          }catch(ex){
            console.log("cdx",ex);  
          }
        }
      });

      
      setTimeout(function() {
        
        
        
        console.log("cd", self.chartData);
        var ctx = jQuery("#"+self.canvasId);
        self.chart = new Chart(ctx, {
          type: 'line',
          responsive: true,
          maintainAspectRatio : false,
          data: {
            datasets: [
              {
                data: self.chartData,
                fill: self.parameters.chartFill,
                //lineTension: 0.5,
                //borderColor: self.color("border-color",".sensor-chart"),
                pointBorderWidth: 1,
                pointRadius: self.parameters.chartPoint,
                //backgroundColor: "rgba(75,192,192,0.1)",
                borderColor: "rgba(0,0,0,0.1)",
                borderWidth:3
            /*borderColor: self.color("border-color",".sensor-chart"),
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: self.color("color",".sensor-chart"),
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: self.color("color",".sensor-chart .spot"),
            pointHoverBorderColor: self.color("border-color",".sensor-chart .spot"),
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,*/
              },
            ]
          },
          options: {
            responsive: true,
            //maintainAspectRatio: true,
            pan: {
              enabled: false,
              mode: 'xy'
              
            },
            zoom: {
              enabled: false,
              
              mode: 'xy'
            },
            title: {
              display: false,//self.parameters.label!=null,
              //text: self.parameters.label
            },
            elements:{
              point:{
                radius:0
              }
            },
            legend: {
              display: false,
            },
            scales: {
              xAxes: [{
                gridLines:{
                  //color:"rgba(255,255,255,0.7)",
                  //zeroLineColor:"rgba(255,255,255,0.5)"
                },
                type: "time",
                unit:'second',
                unitStepSize:120,
                time:{
                  displayFormats: {
                    'millisecond': 'MMM DD',
                    'second': 'HH:mm:ss',
                    'minute': 'HH:mm:ss',
                    'hour': 'HH:mm:ss',
                    'day': 'MMM DD',
                    'week': 'MMM DD',
                    'month': 'MMM DD',
                    'quarter': 'MMM DD',
                    'year': 'MMM DD',
                  }
                },
                ticks:{
                  display:true,
                  stepSize: 120,
                },
                display: self.parameters.chartGrid,
                scaleLabel: {
                  display: true,
                  //labelString: 'Date'
                }
              }],
              yAxes: [{
                ticks: {
                    //fontColor: "white",
                    //max: self.value.maxValue,
                    //min: self.value.minValue,
                    //fontSize: 18,
                    //stepSize: 1,
                    //beginAtZero:true
                },
                gridLines:{
                  //color:"rgba(255,255,255,0.5)",
                  zeroLineColor:"rgba(255,255,255,0.5)"
                },
                display: self.parameters.chartGrid,
                scaleLabel: {
                  display: true,
                  //labelString: 'value'
                }
              }]
            }
          }
          
        });
        setTimeout(function(){
          self.selectPeriod(self.parameters.chartInterval);
        },0)

      }, 0);
    
  }

  public goLive(){
    this.selectPeriod(this.selectedPeriod);
  }

  public movePeriod(movement:number){
    this.updateChart = false;

    var periodStart = this.periodStart;
    var periodEnd = this.periodEnd;

    if (this.selectedPeriod=="5min"){
      periodEnd.setMinutes(periodEnd.getMinutes() + 5 * movement)
      periodStart.setMinutes(periodEnd.getMinutes() - 5 );
    }
    
    if (this.selectedPeriod=="15min"){
      periodEnd.setMinutes(periodEnd.getMinutes() + 15 * movement)
      periodStart.setMinutes(periodEnd.getMinutes() - 15 );
    }

    if (this.selectedPeriod=="30min"){
      periodEnd.setMinutes(periodEnd.getMinutes() + 30 * movement)
      periodStart.setMinutes(periodEnd.getMinutes() - 30 );
    }

    if (this.selectedPeriod=="hour"){
      periodEnd.setHours(periodEnd.getHours() + movement)
      periodStart.setHours(periodEnd.getHours() -1 );
    }

    if (this.selectedPeriod=="day"){
      periodEnd.setHours(this.periodEnd.getDay() + 24 * movement)
      periodStart.setHours(this.periodEnd.getDay() - 24);
    }

    if (this.selectedPeriod=="week"){
      periodEnd.setHours(this.periodEnd.getDay() + 7 * 24 * movement)
      periodStart.setHours(this.periodEnd.getDay() + 14 *  24 * movement);
    }

    if (this.selectedPeriod=="month"){
      
    }

    if (this.selectedPeriod=="year"){
      
    }
    this.periodStart = periodStart;
    this.periodEnd = periodEnd;
    
    this.loadPeriod();
  }



  public selectPeriod(period){
    this.updateChart=true;
    this.selectedPeriod = period;
    var periodEnd = new Date();
    var periodStart = new Date();

    if (period=="5min"){
      periodStart.setMinutes(periodEnd.getMinutes() - 5);
    }  

    if (period=="15min"){
      periodStart.setMinutes(periodEnd.getMinutes() - 15);
    }

    if (period=="30min"){
      periodStart.setMinutes(periodEnd.getMinutes() - 30);
    }

    if (period=="hour"){
      periodStart.setHours(periodEnd.getHours() - 1);
    }

    if (period=="day"){
      periodStart.setHours(periodEnd.getHours() - 24);
    }

    if (period=="week"){
      periodStart.setHours(periodEnd.getHours() - 7 * 24);
    }

    if (period=="month"){
      
    }

    if (period=="year"){
      
    }
    this.periodStart = periodStart;
    this.periodEnd = periodEnd;
    this.setSelectedPeriodText(period);
    //console.log("sp", this.periodStart, this.periodEnd);
    this.loadPeriod();
  }

  public setSelectedPeriodText(period){
    if (period=="5min"){
      this.selectedPeriodText="5 min";
    }  

    if (period=="15min"){
      this.selectedPeriodText="15 min";
    }

    if (period=="30min"){
      this.selectedPeriodText="30 min";
    }

    if (period=="hour"){
      this.selectedPeriodText="Hour";
    }

    if (period=="day"){
      this.selectedPeriodText="Day";
    }

    if (period=="week"){
      this.selectedPeriodText="Week"
    }

    if (period=="month"){
      this.selectedPeriodText="Month"
    }

    if (period=="year"){
      this.selectedPeriodText="Year"
    }
    
  }

  public getPeriodLimit(){
    var periodStart = new Date();
    if (this.selectedPeriod=="5min"){
      periodStart.setMinutes(periodStart.getMinutes() - 5);
    }  

    if (this.selectedPeriod=="15min"){
      periodStart.setMinutes(periodStart.getMinutes() - 15);
    }

    if (this.selectedPeriod=="30min"){
      periodStart.setMinutes(periodStart.getMinutes() - 30);
    }

    if (this.selectedPeriod=="hour"){
      periodStart.setHours(periodStart.getHours() - 1);
    }

    if (this.selectedPeriod=="day"){
      periodStart.setHours(periodStart.getHours() - 24);
    }

    if (this.selectedPeriod=="week"){
      periodStart.setHours(periodStart.getHours() - 7 * 24);
    }

    if (this.selectedPeriod=="month"){
      periodStart.setHours(periodStart.getHours() - 7 * 24*31);
    }

    if (this.selectedPeriod=="year"){
      periodStart.setHours(periodStart.getHours() - 7 * 24*365);
    }
    
    return periodStart;
  }

  public loadPeriod(){
    var self = this;
    //console.log("lp", this.periodStart, this.periodEnd);
    this.kerviService.spine.sendQuery("getSensorData", this.value.id, this.periodStart.toISOString(), this.periodEnd.toISOString(), function (results) {
        console.log("gsd", results);
        var sensorData = results;
        self.chartData.length = 0;
        for (var i = 0; (i < sensorData.length); i++) {
          var dataItem = sensorData[i]
          self.chartData.push({ x: new Date(dataItem.ts + " utc"), y: dataItem.value });
        }
        self.chart.render();  
        self.chart.update();
    });
  }

  private cleanData(){
    if(this.updateChart){
      var doClean = true;
      var limitTS = this.getPeriodLimit();
      var ds = this.chart.data.datasets[0].data
      while ( ds.length>0 && doClean){
        if (ds[0].x < limitTS)
          ds.shift();
        else
          doClean = false
      }
    }
  }
}