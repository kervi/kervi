import { Component, OnInit } from '@angular/core';
import { KerviDashboardPanelComponent } from 'ngx-kervi'
import { group } from '@angular/animations';
@Component({
  selector: 'kervi-dashboard-panel',
  templateUrl: './dashboard-panel.component.html',
  styleUrls: ['./dashboard-panel.component.css']
})
export class DashboardPanelComponent extends KerviDashboardPanelComponent {
  public groupLayout="row";
  constructor() {
    super();
   }

  ngOnInit() {
    this.ngOnInitPanel();
    if (this.panel.hasOnlyGroupPanels)
      this.groupLayout = "none";
  }

}
