import { Component, OnInit, Input } from '@angular/core';
import { DashboardSizes, DashboardSection } from 'kervi-js';

@Component({
  selector: 'kervi-dashboard-section',
  templateUrl: './kervi-dashboard-section.component.html',
  styleUrls: ['./kervi-dashboard-section.component.css']
})
export class KerviDashboardSectionComponent implements OnInit {
  @Input() dashboardSizes: DashboardSizes;
  @Input() section:DashboardSection;
  @Input() inline:boolean = false;
  @Input() inGroup:boolean = false;
  @Input() bodyOnly:boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
