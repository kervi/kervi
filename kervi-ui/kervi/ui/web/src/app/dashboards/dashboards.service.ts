// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Injectable , EventEmitter} from '@angular/core';
import {KerviService} from "../kervi.service";
//import { ControllersService } from "../controllers/controllers.service";
//import { SensorsService } from "../sensors/sensors.service";
import {BehaviorSubject, Subject} from 'rxjs/Rx';
import { DashboardModel, DashboardSectionModel } from '../models/dashboard.model'
@Injectable()
export class DashboardsService {
    dashboards:DashboardModel[] = [];
    private _dashboards$: BehaviorSubject<DashboardModel[]> = new BehaviorSubject<DashboardModel[]>([]);
    public componentsCount:Number = 0;
    public dashboardCount:Number = 0;

    constructor(private kerviService:KerviService){
        var self=this;
        var dashboardCount = 0;
        var componentsCount = 0;
        self.componentsCount = 0;
        var s=this.kerviService.getComponents$().subscribe(function(v){
            self.dashboards=self.kerviService.getComponentsByType("dashboard") ;
            console.log("load dashboards",self.dashboards);
            for(var dashboard of self.dashboards){
                dashboardCount++;
                //var dashboard = dashboardComponent as DashboardModel;
                for(var section of dashboard.sections){
                    for (var sectionComponent of section.components ){
                        componentsCount+=1;
                        
                        if (!sectionComponent.component)
                            sectionComponent.component=self.kerviService.getComponent(sectionComponent.componentId)
                    }
                }

                for (var sectionComponent of dashboard.sysSection.components){
                    componentsCount++;
                    if (!sectionComponent.component)
                        sectionComponent.component=self.kerviService.getComponent(sectionComponent.componentId)
                }

                for (var sectionComponent of dashboard.headerSection.components){
                    componentsCount++;
                    if (!sectionComponent.component)
                        sectionComponent.component=self.kerviService.getComponent(sectionComponent.componentId)
                }

                for (var sectionComponent of dashboard.footerLeftSection.components){
                    componentsCount++;
                    if (!sectionComponent.component)
                        sectionComponent.component=self.kerviService.getComponent(sectionComponent.componentId)
                }

                for (var sectionComponent of dashboard.footerCenterSection.components){
                    componentsCount++;
                    if (!sectionComponent.component)
                        sectionComponent.component=self.kerviService.getComponent(sectionComponent.componentId)
                }

                for (var sectionComponent of dashboard.footerRightSection.components){
                    componentsCount++;
                    if (!sectionComponent.component)
                        sectionComponent.component=self.kerviService.getComponent(sectionComponent.componentId)
                }

                for (var sectionComponent of dashboard.LeftPadXSection.components){
                    componentsCount++;
                    if (!sectionComponent.component)
                        sectionComponent.component=self.kerviService.getComponent(sectionComponent.componentId)
                }
                for (var sectionComponent of dashboard.LeftPadYSection.components){
                    componentsCount++;
                    if (!sectionComponent.component)
                        sectionComponent.component=self.kerviService.getComponent(sectionComponent.componentId)
                }

                for (var sectionComponent of dashboard.RightPadXSection.components){
                    componentsCount++;
                    if (!sectionComponent.component)
                        sectionComponent.component=self.kerviService.getComponent(sectionComponent.componentId)
                }
                for (var sectionComponent of dashboard.RightPadYSection.components){
                    this.componentsCount++;
                    if (!sectionComponent.component)
                        sectionComponent.component=self.kerviService.getComponent(sectionComponent.componentId)
                }
            }
            console.log("load dashboards updated",self.dashboards, dashboardCount, componentsCount);
            self.componentsCount = componentsCount;
            self._dashboards$.next(self.dashboards);
        });

        this.kerviService.connected$.subscribe(function(v){
            if (v){
                self.kerviService.spine.addEventHandler("dashboardLinkChanged", null,function(v){
                    for(var dashboard of self.dashboards){
                        for(var section of dashboard.sections){
                            if (section.components){
                                for (var component of section.components){
                                    if (component.linkId == this.linkId){
                                        component.parameters[this.name] = this.value;
                                    }
                                }
                            }
                        }
                    }
                });
            };
        });
    }

    
    /*private resolveSubSections(section:DashboardSectionModel){
        if (section.subSections){
            for(var subSection of section.subSections){
                this.resolveSubSections(subSection);
                for (var sectionComponent of subSection.components ){
                    if (!sectionComponent.component)
                        sectionComponent.component=this.kerviService.getComponent(sectionComponent.componentId)
                }
            }
        }
    }*/

    private refreshDashboards(){
        var self=this;
        
        self._dashboards$.next(this.dashboards);
    }

/*
    private updateDashboards=function(message){
        if (Array.isArray(message)){
            for (var i=0;(i<message.length);i++){
                this.updateDashboards(message[i]);
            }	
        } else {
            var dashboard=new DashboardModel();
            dashboard.id=message.id;
            dashboard.name=message.name;
            dashboard.type=message.type;
            dashboard.isDefault=message.isDefault;
            dashboard.template=message.template;
            dashboard.sections=[];
            if (!dashboard.template){
                var template=""
                for (let messageSection of message.sections){
                    var section=new DashboardSectionModel();
                    section.id=messageSection.id;
                    section.name=messageSection.name;

                }
            }
            this.dashboards.push(dashboard);
        }
    }*/

    public getDashboards$(){
        return this._dashboards$.asObservable()
    }

    public getDashboardById(id:string){
        for (let dashboard of this.dashboards) {
            if (dashboard.id==id)
                return dashboard
        }
        return null;
    }

    public getDashboardComponents(dashboardId){
        var result=[]

    }
}