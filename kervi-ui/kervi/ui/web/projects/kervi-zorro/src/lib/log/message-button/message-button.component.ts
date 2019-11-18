// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { KerviUserLogComponent } from 'ngx-kervi';
@Component({
  selector: 'kervi-message-button',
  templateUrl: './message-button.component.html',
  styleUrls: ['./message-button.component.scss'],
})

export class UserMessageButtonComponent extends KerviUserLogComponent implements OnInit {
  visible = false;
  
  constructor() {
        super(); 
    }

  ngOnInit() {
    var self = this;
    this.ngOnInitUserLog(); 
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}