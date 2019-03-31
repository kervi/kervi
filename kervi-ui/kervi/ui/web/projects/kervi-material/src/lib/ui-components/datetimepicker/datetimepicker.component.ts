// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import { DateTimeValue } from 'kervi-js'
@Component({
  selector: 'kervi-datetime',
  templateUrl: './datetimepicker.component.html',
  styleUrls: ['./datetimepicker.component.scss']
})

export class DateTimeComponent implements OnInit {
  @Input() dateTime:DateTimeValue;
  @Input() type:string;
  @Input() format: string;
  @Output() dateTimeChanged = new EventEmitter
  private isReady=false;
  constructor(private elementRef:ElementRef) {  
  }

  ngOnInit() {

  
    
  }
}