import { Injectable } from '@angular/core';
import { KerviService } from "./kervi.service"
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class ConnectedService {
  private isConnected:boolean = false;
  private currentPage=null;
  constructor(private kerviService:KerviService, private router:Router, private route:ActivatedRoute) { 
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
          self.kerviService.application$.subscribe(function(v){
            if (v){
              var defaultDashboard=v.dashboards.filter(function(v){ return v.default; });
              console.log("df",defaultDashboard);
              if (defaultDashboard){
                self.router.navigate(['/'+defaultDashboard[0].type+'/'+defaultDashboard[0].id]);  
              } else
                self.router.navigate(['/camboard/main']);
            }
          })
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
