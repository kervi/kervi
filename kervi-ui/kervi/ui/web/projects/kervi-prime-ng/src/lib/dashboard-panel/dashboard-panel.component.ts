import { Component, OnInit } from '@angular/core';
import { KerviDashboardPanelComponent } from 'ngx-kervi'
@Component({
  selector: 'kervi-dashboard-panel',
  templateUrl: './dashboard-panel.component.html',
  styleUrls: ['./dashboard-panel.component.css']
})
export class DashboardPanelComponent extends KerviDashboardPanelComponent {

  constructor() {
    super();
   }

  ngOnInit() {
    this.ngOnInitPanel();
  }

}
