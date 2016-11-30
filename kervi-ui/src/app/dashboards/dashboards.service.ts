// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Injectable , EventEmitter} from '@angular/core';
import {KerviService} from "../kervi.service";
import {BehaviorSubject, Subject} from 'rxjs/Rx';
import { DashboardModel } from './models/dashboard.model'
@Injectable()
export class DashboardsService {
    dashboards:DashboardModel[] = [];
    private _dashboards$: BehaviorSubject<DashboardModel[]> = new BehaviorSubject<DashboardModel[]>([]);

    constructor(private kerviService:KerviService){
        var self=this;
        
        var s=this.kerviService.connected$.subscribe(function(connectedValue){
            if (connectedValue){
                self.refreshDashboards();

                self.kerviService.spine.addEventHandler("moduleStarted","",function(id,value){
                    console.log("module started");
                    self.refreshDashboards()
                });

                self.kerviService.spine.addEventHandler("moduleStopped","",function(id,value){
                    console.log("module stopped");
                    setTimeout(function(){
                        self.refreshDashboards();
                    },3000);
                })

            } else {
                self.dashboards=[];
                self._dashboards$.next(self.dashboards);
            }
        });
    }

    private refreshDashboards(){
        var self=this;
        this.dashboards=[];
        
        self.kerviService.spine.sendQuery("getDashboardInfo",function(message){
            console.log("dashboard info",message);
            
            self.updateDashboards.call(self,message);
            self._dashboards$.next(self.dashboards);
            
        });
    }

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
            this.dashboards.push(dashboard);
        }
    }

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
}