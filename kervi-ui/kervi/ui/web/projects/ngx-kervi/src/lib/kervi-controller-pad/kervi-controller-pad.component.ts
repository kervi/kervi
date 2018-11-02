import { Component, OnInit, Input } from '@angular/core';
import { DashboardSizes } from 'kervi-js';

@Component({
  selector: 'kervi-controller-pad',
  templateUrl: './kervi-controller-pad.component.html',
  styleUrls: ['./kervi-controller-pad.component.css']
})
export class KerviControllerPadComponent implements OnInit {
  @Input() dashboardSizes: DashboardSizes;
  constructor() { }

  ngOnInit() {
  }

}
