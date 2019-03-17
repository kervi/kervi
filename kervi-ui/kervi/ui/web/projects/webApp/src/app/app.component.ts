import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NGXKerviService } from "ngx-kervi";
import { ConnectionState } from "ngx-kervi";
import { Router, ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private currentPage=null;
  @ViewChild(TemplateRef) messageTemplate: TemplateRef<{}>;
  
  constructor (private kerviService:NGXKerviService, private router:Router, private route:ActivatedRoute, private notification: NzNotificationService){
    var self = this;
    
    
  }

  ngOnInit() {
    var self = this;

    this.kerviService.getLogMessages$().subscribe(function(messages){
      console.log("m", messages);
      if (messages && messages.length){
        var message = messages[0];
        var type="info";
        if (message.level==1)
          type= "error"

          if (message.level==2)
          type= "warning"
        
        self.notification.template(self.messageTemplate, { nzData: message });
      }
      
    })

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

    setTimeout(function(){
      self.kerviService.connect();
    },0)
    
  }
}
