// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Injectable } from '@angular/core';
import { KerviService } from "./kervi.service"
import { DashboardsService } from './dashboards/dashboards.service'
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class ConnectedService {
  private isConnected:boolean = false;
  private currentPage=null;
  constructor(private kerviService:KerviService, private dashboardsService:DashboardsService, private router:Router, private route:ActivatedRoute) { 
    console.log("connected service c");
    var self=this;
    this.kerviService.connect();
    var s=this.kerviService.connected$.subscribe(function(connectedValue){
       console.log("connected service sub",connectedValue, self.isConnected, self);
      if (connectedValue){
        self.isConnected=true;
        
        if (self.currentPage)
          self.router.navigate([self.currentPage]);
        else {
          self.dashboardsService.getDashboards$().subscribe(function(v){
            if (v.length){
              var defaultDashboard=v.filter(function(v){ return v.isDefault; });
              console.log("df",v,defaultDashboard);
              if (defaultDashboard.length>0){
                self.router.navigate(['/'+defaultDashboard[0].type+'/'+defaultDashboard[0].id]);  
              } 
            }
          });
        }
      } else if (!connectedValue) {
        if (self.isConnected){
          self.currentPage=self.router.url;
          self.router.navigate(['/connect']);
        }
        self.isConnected=false;
      }
    })
  }

}
