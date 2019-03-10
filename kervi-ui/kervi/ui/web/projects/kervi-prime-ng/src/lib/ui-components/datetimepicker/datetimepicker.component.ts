// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, Output, ElementRef, EventEmitter } from '@angular/core';
declare var moment;
declare var jQuery:any;
@Component({
  selector: 'kervi-datetime',
  templateUrl: './datetimepicker.component.html',
  styleUrls: ['./datetimepicker.component.scss']
})

export class DateTimeComponent implements OnInit {
  @Input() set dateTime(v:Date){
    this.datetimeValue = v;
    if (this.isReady)
      jQuery('.date', this.elementRef.nativeElement).data("datetimepicker").date(moment(v).toDate());
  }
  @Input() type:string;
  @Input() format: string;
  @Output() dateTimeChanged = new EventEmitter
  id:string = null;
  datetimeValue:Date = null;
  private isReady=false;
  constructor(private elementRef:ElementRef) {  
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
    
    //if (self.value.value)
    //  self.datetimevalue = self.value.value.toLocaleString();
    
    setTimeout(function(){
      var mdate = moment(self.datetimeValue);
      var options = {
        date:mdate.toDate(),
        format:self.format,
        buttons:{
          showToday: true,
          showClear:true,
          showClose:true
        }
      };
      jQuery('.date', self.elementRef.nativeElement).datetimepicker(options);
      jQuery('.date', self.elementRef.nativeElement).on("change.datetimepicker", function(e){
        var dt = moment.utc(e.date).format()
		
        self.dateTimeChanged.emit(dt);
      })
      self.isReady = true;
    },0);
  }
}