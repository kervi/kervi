// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { KerviUserLogComponent } from 'ngx-kervi';
//import { TemplateService } from '../../template.service';

@Component({
  selector: 'kervi-user-log',
  templateUrl: './user-log.component.html',
  styleUrls: ['./user-log.component.scss'],
})

export class UserLogComponent extends KerviUserLogComponent implements OnInit {
    constructor() {
        super(); 
    
    }

  ngOnInit() {
    this.ngOnInitUserLog(); 
  }

  
  
}