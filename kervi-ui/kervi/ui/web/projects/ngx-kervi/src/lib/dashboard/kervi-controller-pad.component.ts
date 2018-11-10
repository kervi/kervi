import { Component, OnInit, Input } from '@angular/core';
import { DashboardSizes } from 'kervi-js';

@Component({
  selector: 'kervi-controller-pad-base',
  template: ''
})
export class KerviControllerPadComponent implements OnInit {
  @Input() dashboardSizes: DashboardSizes;
  constructor() { }

  ngOnInit() {
  }

}
