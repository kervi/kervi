import { Component, Input, Output, OnInit, OnDestroy, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { KerviService } from "../../kervi.service";
import { DashboardsService } from "../dashboards.service";
import { Router, ActivatedRoute } from '@angular/router';
import { TemplateService } from '../../template.service';
import { DashboardModel, DashboardSectionModel, DashboardMessageModel, DashboardSizes } from '../../models/dashboard.model';
//import { DashboardFactory } from '../models/factory';
import { IComponent } from '../../models/IComponent.model';
import {BehaviorSubject, Observable} from 'rxjs/Rx';

@Component({
  selector: 'kervi-dashboard-section',
  //providers: [ KerviService ],
  templateUrl: './dashboard-section.component.html',
  styleUrls: ['./dashboard-section.component.css'],
  //encapsulation: ViewEncapsulation.None
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardSectionComponent implements OnInit, OnDestroy {
    @Input() section:DashboardSectionModel;
    @Input() inline:boolean = false;
    @Input() defaultSizes:DashboardSizes = new DashboardSizes();
    @Input() inGroup:boolean = false;
    @Input() bodyOnly:boolean = false;
    width:string = "";
    showHeader:boolean = false;
    expanded:boolean = false;
    title:string;
    components:any[]=[];
    headerComponents: any[] = [];
    //messages: DashboardMessageModel[] = [];
    messages$: Observable<DashboardMessageModel[]> = null;
    //sectionComponents:IComponent[] = []

    constructor (private kerviService:KerviService, private templateService:TemplateService){
        
        this.messages$ = this.kerviService.getLogMessages$(); 
    }

    calcWidth(section:DashboardSectionModel, inGroup){
        if (section.type=="group"){
            if (section.parameters.width==null || section.parameters.width=="0")
                return "100%"
            else
                return this.templateService.getSizeValue(section.parameters.width);
        } else
            return inGroup ? "" : this.templateService.getSizeValue(section.parameters.width);
    }

    showSectionHeader(section:DashboardSectionModel){
        var hasHeaderComponents = false
        for( let component of this.section.components){
            if (component.parameters.linkToHeader)
                hasHeaderComponents = true
        }
        
        return (section.parameters.title != null && section.parameters.title.length>0) || hasHeaderComponents
        
    }

    ngOnInit() {
        var self=this;
        
        this.title = this.section.parameters.title;
        
        for( let component of this.section.components){
            if (component.parameters.linkToHeader)
                this.headerComponents.push(component)
            else
                this.components.push(component)
        }
        
        this.showHeader = (this.section.parameters.title != null && this.section.parameters.title.length>0) || (this.headerComponents.length > 0)
        if (this.section.parameters.userLog){
            this.kerviService.spine.sendQuery("getLogItems",0, this.section.parameters.logLength,function(v){
                //console.log('lm', v);
                //var messages = DashboardFactory.createLogMessages(v)
                //self.messages$.next(messages);
                
            });
            /*this.kerviService.spine.addEventHandler("userLogMessage", null, function(v){
                var messages = self.messages$.value
                console.log("lm", this);
                messages.unshift(new DashboardMessageModel(this));
                if (messages.length>self.section.parameters.logLength)
                    messages.pop();
                self.messages$.next(messages);   
            });*/
        }

         this.width = this.inGroup ? "" : this.templateService.getSizeValue(self.section.parameters.width);
    }

    ngOnDestroy(){ 
    }
}