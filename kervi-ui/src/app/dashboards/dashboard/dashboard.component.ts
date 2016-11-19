import { Component, OnInit, OnDestroy } from '@angular/core';
import { KerviService } from "../../kervi.service";
import { DashboardsService } from "../dashboards.service";
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardModel } from '../models/dashboard.model'
@Component({
  selector: 'app-dashboard',
  //providers: [ KerviService ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  public dashboardId:string;
  public dashboard:DashboardModel;
  private routeSubscription;
  
  constructor(private kerviService:KerviService, private dashboardsService:DashboardsService, private router:Router, private activatedRoute:ActivatedRoute) {
      console.log("db c");
   }

  ngOnInit() {
    console.log("db nginit");
    this.routeSubscription = this.activatedRoute.params.subscribe(params => {
       console.log("cb,rp",params);
       this.dashboardId = params['name']; 
       this.dashboard=this.dashboardsService.getDashboardById(this.dashboardId);
    });
  }

  ngOnDestroy(){
    this.routeSubscription.unsubscribe();
  }
}
