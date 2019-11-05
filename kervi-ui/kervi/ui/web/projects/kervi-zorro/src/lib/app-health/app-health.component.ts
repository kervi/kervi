// Copyright (c) 2019, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { KerviAppHealthComponent } from 'ngx-kervi';
//import { TemplateService } from '../../template.service';

@Component({
  selector: 'kervi-app-health',
  templateUrl: './app-health.component.html',
  styleUrls: ['./app-health.component.scss'],
})

export class AppHealthComponent extends KerviAppHealthComponent implements OnInit {
    constructor() {
        super();
    }

  ngOnInit() {
    this.ngOnInitAppHealth();
  }
}