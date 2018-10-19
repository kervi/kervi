// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Injectable } from '@angular/core';
import { KerviService } from "./kervi.service"
import { DashboardsService } from './dashboards/dashboards.service'
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class ConnectedService {
  private isConnected:boolean = false;
  public isAuthenticated: boolean = false;
  
  private currentPage=null;
  constructor(private kerviService:KerviService, private dashboardsService:DashboardsService, private router:Router, private route:ActivatedRoute) { 
    console.log("connected service c");
    var self=this;
    this.kerviService.connect();
    
    
    var s=this.kerviService.connected$.subscribe(function(connectedValue){
      console.log("connected service state",connectedValue, self.isConnected, self);
      if (connectedValue){
        self.isConnected=true;
        self.isAuthenticated=true;
        if (self.currentPage)
          self.router.navigate([self.currentPage]);
        else {
          self.dashboardsService.getDashboards$().subscribe(function(v){
            if (v && v.length){
              var defaultDashboard=v.filter(function(v){ return v.isDefault; });
              if (defaultDashboard.length>0){
                console.log("df",defaultDashboard[0].componentType+'/'+defaultDashboard[0].id);
                setTimeout(function(){
                  self.router.navigate(['/'+defaultDashboard[0].componentType+'/'+defaultDashboard[0].id]);  
                },100);
              } 
            }
          });
        }
      } else if (!connectedValue) {
        self.isAuthenticated=false;
        if (self.isConnected){
          self.currentPage=self.router.url;
          self.router.navigate(['/connect']);
        }
        self.isConnected=false;
        
      }
    })  
  }

  public connect(userName:string, password:string){
    this.kerviService.authenticate(userName, password);
  }


  public logout(){
    this.isAuthenticated = false;
    //this.kerviService.disconnect();
  }

}
