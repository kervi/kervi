// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { TemplateService } from '../../template.service';
@Component({
  selector: 'kervi-icon',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})

export class IconsComponent implements OnInit {
  @Input() icon: string = null;
 
  constructor() {  
  }

  
  

  ngOnInit() {
    
  }
  
}