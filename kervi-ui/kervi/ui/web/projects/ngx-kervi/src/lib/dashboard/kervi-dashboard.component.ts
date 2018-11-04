import { Component, OnInit, Input } from '@angular/core';
import { Dashboard, DashboardSizes } from 'kervi-js';
import { NGXKerviService } from '../ngx-kervi.service';
import { AppInjector } from '../app-injector.service'
@Component({
  selector: 'kervi-dashboard',
  template: ''
})
export class KerviDashboardComponent implements OnInit {
  protected dashboard:Dashboard = null;
  protected kerviService:NGXKerviService;
  protected dashboards:Dashboard[] = null;
  protected dashboardSizes:DashboardSizes = null;
  protected isAppEmpty:boolean = true;
  protected showMenu:boolean = false;
  protected dashboardPanelsHidden:boolean=false;
  protected showPanelController:boolean;
  protected cameraId: string = null;
  protected cameraParameters:any = null;
  
  

  private inFullScreen:boolean = false; 
  constructor() {
    this.kerviService = AppInjector.get(NGXKerviService);
    
   }

  protected loadDashboard(dashboardId:string){
    this.dashboard = this.kerviService.getComponent(dashboardId, "dashboard") as Dashboard;
    this.dashboards = this.kerviService.getComponentsByType("dashboard");
    this.isAppEmpty = this.kerviService.isAppEmpty();
    this.showMenu = (this.dashboards.length > 1 || this.kerviService.doAuthenticate);
    if (this.dashboard.backgroundPanel){
      if (this.dashboard.backgroundPanel.components.length > 0)
      {
        this.dashboardPanelsHidden=true;
        this.showPanelController=true;
        this.cameraId=this.dashboard.backgroundPanel.components[0].component.id;
        this.cameraParameters=this.dashboard.backgroundPanel.components[0].parameters;
        console.log("cam", this.cameraId, this.cameraParameters);
      }
    }
    console.log("db", dashboardId, this.dashboard);
  }

  ngOnInit() {
    
  }

  toggleFullScreen() {
    var doc:any;
    doc = document;
    if ((doc.fullScreenElement && doc.fullScreenElement !== null))     
     /*(!doc.mozFullScreen && !document.webkitIsFullScreen))*/ {
       this.inFullScreen = true;
      if (doc.documentElement.requestFullScreen) {  
        doc.documentElement.requestFullScreen();  
      } else if (doc.documentElement.mozRequestFullScreen) {  
        doc.documentElement.mozRequestFullScreen();  
      }// } else if (document.documentElement.webkitRequestFullScreen) {  
      //   doc.documentElement.webkitRequestFullScreen();  
      // }  
    } else {  
      this.inFullScreen=false;
      if (doc.cancelFullScreen) {  
        doc.cancelFullScreen();  
      } else if (doc.mozCancelFullScreen) {  
        doc.mozCancelFullScreen();  
      }// } else if (document.webkitCancelFullScreen) {  
      //   doc.webkitCancelFullScreen();  
      // }  
    }
  }
}