import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { KerviDashboardComponent} from 'ngx-kervi'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends KerviDashboardComponent {
  private dashboardId:string = null;
  constructor(private router:Router, private activatedRoute:ActivatedRoute) {
    super();
   }

  ngOnInit() {
    //this.router.url;
    //console.log("r", this.activatedRoute.params.subscribe)
    var routeSubscription = this.activatedRoute.params.subscribe(params => {
      var dashboardId = params['name']; 
      this.loadDashboard(dashboardId);
      console.log("rid", dashboardId);
      
    //   this.dashboardsService.getDashboards$().subscribe(function(v){
    //     self.setupDashboard()
     })
  }

}
