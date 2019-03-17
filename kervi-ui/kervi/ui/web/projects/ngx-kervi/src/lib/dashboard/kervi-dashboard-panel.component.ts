import { Component, Input } from '@angular/core';
import { DashboardSizes, DashboardPanel, DashboardMessageModel } from 'kervi-js';
import { NGXKerviService } from '../ngx-kervi.service';
import { KerviTemplateService } from '../ngx-kervi-template.service';
import { AppInjector } from '../app-injector.service';
import {  Observable } from 'rxjs';
@Component({
  selector: 'kervi-dashboard-panel-base',
  template: ''
})
export class KerviDashboardPanelComponent {
  @Input() dashboardSizes: DashboardSizes;
  @Input() panel:DashboardPanel=null;
  @Input() inline:boolean = false;
  @Input() inGroup:boolean = false;
  @Input() bodyOnly:boolean = false;
  
  
  public width:string = "";
  public showHeader:boolean = false;
  public expanded:boolean = false;
  public title:string = null;
  public bodyComponents:any[]=[];
  public headerComponents: any[] = [];
  public footerComponents: any[] = [];
  //messages: DashboardMessageModel[] = [];
  messages$: Observable<DashboardMessageModel[]> = null;
  //panelComponents:IComponent[] = []
  protected templateService: KerviTemplateService = null;
  protected kerviService:NGXKerviService = null;
  constructor (){
    this.templateService = AppInjector.get(KerviTemplateService);    
    this.kerviService = AppInjector.get(NGXKerviService);  
    this.messages$ = this.kerviService.getLogMessages$(); 
  }

    calcWidth(panel:DashboardPanel, inGroup){
        if (panel.type=="group"){
            if (panel.parameters.width==null || panel.parameters.width=="0")
                return "100%"
            else
                return this.templateService.getSizeValue(panel.parameters.width);
        } else
            return inGroup ? "" : this.templateService.getSizeValue(panel.parameters.width);
    }

    showPanelHeader(panel:DashboardPanel){
        var hasHeaderComponents = false
        for( let component of this.panel.components){
            if (component.parameters.linkToHeader)
                hasHeaderComponents = true
        }
        
        return (panel.parameters.title != null && panel.parameters.title.length>0) || hasHeaderComponents
        
    }

    ngOnInitPanel() {
        var self=this;
        
        this.title = this.panel.parameters.title;
        
        for( let component of this.panel.components){
            if (component.parameters.linkToHeader)
                this.headerComponents.push(component)
            else
                this.bodyComponents.push(component)
        }
        
        this.showHeader = (this.panel.parameters.title != null && this.panel.parameters.title.length>0) || (this.headerComponents.length > 0)
        if (this.panel.parameters.userLog){
            this.kerviService.spine.sendQuery("getLogItems",0, this.panel.parameters.logLength,function(v){
                //console.log('lm', v);
                //var messages = DashboardFactory.createLogMessages(v)
                //self.messages$.next(messages);
                
            });
            /*this.kerviService.spine.addEventHandler("userLogMessage", null, function(v){
                var messages = self.messages$.value
                console.log("lm", this);
                messages.unshift(new DashboardMessageModel(this));
                if (messages.length>self.panel.parameters.logLength)
                    messages.pop();
                self.messages$.next(messages);   
            });*/
        }

         this.width = this.inGroup ? "" : this.templateService.getSizeValue(self.panel.parameters.width);
    }
  }