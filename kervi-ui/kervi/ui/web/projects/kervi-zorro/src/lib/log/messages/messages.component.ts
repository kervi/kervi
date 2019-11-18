// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { KerviUserLogComponent } from 'ngx-kervi';
import { NzNotificationService } from 'ng-zorro-antd';
@Component({
  selector: 'kervi-user-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})

export class UserMessagesComponent extends KerviUserLogComponent implements OnInit {
  @ViewChild(TemplateRef) messageTemplate: TemplateRef<{}>;  
  constructor(private notification: NzNotificationService) {
        super(); 
        var self = this;
        this.lastMessage$.subscribe(function(message){
          if (message){
            self.notification.template(self.messageTemplate, { nzData: message });
          }
        })
    }

  ngOnInit() {
    var self = this;
    this.ngOnInitUserLog(); 
    
  }
}