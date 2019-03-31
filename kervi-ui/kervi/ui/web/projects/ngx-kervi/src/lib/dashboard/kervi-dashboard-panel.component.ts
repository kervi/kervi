import { Component, Input } from '@angular/core';
import { DashboardSizes, DashboardPanel } from 'kervi-js';
import { NGXKerviService } from '../ngx-kervi.service';
import { KerviTemplateService } from '../ngx-kervi-template.service';
import { AppInjector } from '../app-injector.service';

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
  
  //panelComponents:IComponent[] = []
  protected templateService: KerviTemplateService = null;
  protected kerviService:NGXKerviService = null;
  constructor (){
    this.templateService = AppInjector.get(KerviTemplateService);    
    this.kerviService = AppInjector.get(NGXKerviService);  
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
        

        if (this.panel.type=="group"){
            if (this.panel.parameters.width==null || this.panel.parameters.width=="0" || this.panel.parameters.width=="")
                this.width = "100%"
            else
                this.width = this.templateService.getSizeValue(this.panel.parameters.width);
        } else
            this.width = this.inGroup ? "100%" : this.templateService.getSizeValue(this.panel.parameters.width);;
    }
  }