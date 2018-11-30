import { Component } from '@angular/core';
import { NGXKerviService } from "ngx-kervi";
import { ConnectionState } from "ngx-kervi";
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private currentPage=null;
  constructor (private kerviService:NGXKerviService, private router:Router, private route:ActivatedRoute){
    var self = this;
    this.kerviService.connectionState$.subscribe(function(connectedState){
      console.log("connected service state",connectedState, self);
      if (connectedState == ConnectionState.disconnected){
        self.router.navigate(['/connect']);
      }
      if (connectedState == ConnectionState.loading){
      }
      if (connectedState == ConnectionState.authenticate){
        self.router.navigate(['/authenticate']);
      }
      if (connectedState == ConnectionState.connected){
        if (self.currentPage)
          self.router.navigate([self.currentPage]);
        else {
          var defaultDashboard = self.kerviService.getDefaultDashboard();
          self.router.navigate(['/'+defaultDashboard.componentType+'/'+defaultDashboard.id])
        }
      }
    });
    kerviService.connect();
  }
}
