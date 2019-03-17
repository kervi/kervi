import { Component, OnInit, Input } from '@angular/core';
import { Dashboard, DashboardSizes, NumberValue } from 'kervi-js';
import { NGXKerviService } from '../ngx-kervi.service';
import { AppInjector } from '../app-injector.service'
@Component({
  selector: 'kervi-dashboard',
  template: ''
})
export class KerviDashboardComponent {
  private dashboardId:string=null;
  protected dashboard:Dashboard = null;
  protected kerviService:NGXKerviService;
  protected dashboards:Dashboard[] = null;
  protected dashboardSizes:DashboardSizes = null;
  protected isAppEmpty:boolean = true;
  protected showMenu:boolean = false;
  protected dashboardPanelsHidden:boolean=false;
  protected showPanelController:boolean = false;
  protected cameraId: string = null;
  protected cameraParameters:any = null;
  
  protected showLeftPad:boolean = false;
  protected leftPadXValue:NumberValue = null;
  protected leftPadYValue:NumberValue = null;
  protected autoCenterLeftPad:boolean = false;
  
  protected showRightPad:boolean = false;
  protected rightPadXValue:NumberValue = null;
  protected rightPadYValue:NumberValue = null;
  protected autoCenterRightPad:boolean = false;

  private inFullScreen:boolean = false; 
  constructor() {
    this.kerviService = AppInjector.get(NGXKerviService);
    var self = this;
    this.kerviService.componentsChanged$.subscribe(function(){
      //var dashboard = self.kerviService.getComponent(self.dashboardId, "dashboard") as Dashboard
      //if (dashboard)
        self.loadDashboard(self.dashboardId);
    })
    
   }

  protected loadDashboard(dashboardId:string){
    this.dashboardId = dashboardId;
    this.dashboard = this.kerviService.getComponent(dashboardId, "dashboard") as Dashboard;
    if (this.dashboard){
      this.dashboards = this.kerviService.getComponentsByType("dashboard");
      this.isAppEmpty = this.kerviService.isAppEmpty();
      this.showMenu = (this.dashboards.length > 1 || this.kerviService.doAuthenticate);
      this.showPanelController=false;
      this.cameraId = null;
      this.cameraParameters = null;
      this.showLeftPad = false;
      this.showRightPad = false;
      this.dashboardPanelsHidden=false;
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
      if (this.dashboard.LeftPadXPanel && this.dashboard.LeftPadXPanel.components.length || this.dashboard.LeftPadYPanel && this.dashboard.LeftPadYPanel.components.length){
        this.showLeftPad = true;
        if (this.dashboard.LeftPadXPanel.components.length){
          this.leftPadXValue=this.dashboard.LeftPadXPanel.components[0].component as NumberValue;
          if (this.dashboard.LeftPadXPanel.components[0].parameters.padAutoCenter)
            this.autoCenterLeftPad = true;
        }
        if (this.dashboard.LeftPadYPanel.components.length){
          this.leftPadYValue=this.dashboard.LeftPadYPanel.components[0].component as NumberValue;
          if (this.dashboard.LeftPadXPanel.components[0].parameters.padAutoCenter)
            this.autoCenterLeftPad = true;
        }
      }

      if (this.dashboard.RightPadXPanel && this.dashboard.RightPadXPanel.components.length || this.dashboard.RightPadYPanel && this.dashboard.RightPadYPanel.components.length){
        this.showRightPad = true;
        if (this.dashboard.RightPadXPanel.components.length){
          this.rightPadXValue=this.dashboard.RightPadXPanel.components[0].component as NumberValue;
          if (this.dashboard.LeftPadXPanel.components[0].parameters.padAutoCenter)
            this.autoCenterRightPad = true;
        }
        if (this.dashboard.RightPadYPanel.components.length){
          this.rightPadYValue=this.dashboard.RightPadYPanel.components[0].component as NumberValue;
          if (this.dashboard.RightPadXPanel.components[0].parameters.padAutoCenter)
            this.autoCenterRightPad = true;
        }
      }

      console.log("load db", dashboardId, this.dashboard, this);
    }
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
