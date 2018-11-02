import { Component, OnInit } from '@angular/core';
import { KerviDashboardSectionComponent } from 'ngx-kervi'
@Component({
  selector: 'kervi-dashboard-section',
  templateUrl: './dashboard-section.component.html',
  styleUrls: ['./dashboard-section.component.css']
})
export class DashboardSectionComponent extends KerviDashboardSectionComponent {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
