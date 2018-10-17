// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { DynamicDateTimeModel, DynamicRange, DynamicRangeType  } from '../../models/dynamicValues.model';
import { DashboardSectionModel, DashboardSizes } from '../../models/dashboard.model';
import { KerviService } from '../../kervi.service';
import { TemplateService } from '../../template.service';
import { BehaviorSubject } from 'rxjs/Rx';
declare var moment;
declare var jQuery:any;
//declare var Chart:any;
@Component({
  selector: 'kervi-datetime',
  templateUrl: './datetimepicker.component.html',
  styleUrls: ['./datetimepicker.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})

export class DateTimeComponent implements OnInit {
  @Input() value: BehaviorSubject<Date> = new BehaviorSubject<Date>(null);
  @Input() parameters: any = null;
  @Input() type: string;
  @Input() size:number;
  @Input() inline:boolean = false;
  @Input() defaultSizes:DashboardSizes = new DashboardSizes();
  @Input() parent:any;
  id:string = null;
  datetimevalue:string = null;
  constructor(private kerviService:KerviService, private elementRef:ElementRef, private templateService:TemplateService ) {  
  }

  private color(style,selector){
    return this.templateService.getColor(style,selector);
  }
  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
  
  ngOnInit() {


    this.id = this.guid();
    var self = this; 
    if (self.parameters){
      if (!self.inline && self.parameters.inline)
        self.inline=true;
      
    } else {
      
    }
    if (self.value.value)
      self.datetimevalue = self.value.value.toLocaleString();
    
    setTimeout(function(){
      var mdate = moment(self.value.value);
      console.log("dp", self.parent.value.id, self.value.value, mdate.toDate());
      var options = {
        date:moment(self.value.value).toDate(),
        buttons:{
          showToday: true,
          showClear:true,
          showClose:true
        }
      };
      if (self.parameters.type=="time")
        options["format"] = self.kerviService.application$.value.display.unit_system.datetime.time;
      else if (self.parameters.type=="date")
        options["format"] = self.kerviService.application$.value.display.unit_system.datetime.date;
      else
        options["format"] = self.kerviService.application$.value.display.unit_system.datetime.datetime;
      jQuery('.date', self.elementRef.nativeElement).datetimepicker(options);
      jQuery('.date', self.elementRef.nativeElement).on("change.datetimepicker", function(e){
        self.parent.change(e);
      })
      self.value.subscribe(function(v){
        console.log("dvl", v);
        if (v){
          jQuery('.date', self.elementRef.nativeElement).data("datetimepicker").date(moment(v).toDate());
        }
      })
    },0);
  }

}