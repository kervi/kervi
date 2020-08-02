// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { KerviActionComponent } from 'ngx-kervi';
//import { TemplateService } from '../../template.service';

@Component({
  selector: 'kervi-action',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})

export class ActionComponent extends KerviActionComponent implements OnInit {
    constructor() {
        super();
    }

  ngOnInit() {
   this.ngOnInitAction();
  }
}