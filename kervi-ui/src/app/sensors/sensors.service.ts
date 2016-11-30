// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Injectable , EventEmitter} from '@angular/core';
import {KerviService} from "../kervi.service";
import {BehaviorSubject, Subject} from 'rxjs/Rx';
import { SensorModel } from './models/sensor.model'

@Injectable()
export class SensorsService {
    private sensors: SensorModel[] = [];
    private sensorTypes: string[]=[];
    private _sensors$: BehaviorSubject<SensorModel[]> = new BehaviorSubject<SensorModel[]>([]);
    private _sensorTypes$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
    constructor (private kerviService:KerviService){
        var self=this;
        
            var s=this.kerviService.connected$.subscribe(function(connectedValue){
                if (connectedValue){
                    self.refreshSensors();

                    self.kerviService.spine.addEventHandler("NewSensorReading","",function(){
                        for (let sensor of self.sensors){
                            if (sensor.id==this.sensor){
                                sensor.value$.next(this.value);
                                var spl=sensor.sparkline$.value;
                                spl.push(this.value);
                                if (spl.length>10)
                                    spl.shift();
                                sensor.sparkline$.next(spl);
                            }
                        }
                    });

                    self.kerviService.spine.addEventHandler("moduleStarted","",function(id,value){
                        console.log("module started");
                        self.refreshSensors()
                    });

                    self.kerviService.spine.addEventHandler("moduleStopped","",function(id,value){
                        console.log("module stopped");
                        setTimeout(function(){
                            self.refreshSensors();
                        },3000);
                    })





                } else {
                    self.sensors=[];
                    self.sensorTypes=[];
                    self._sensors$.next(self.sensors);
                    self._sensorTypes$.next(self.sensorTypes);
                }
            });
         
            


        
    }

    private refreshSensors(){
        var self=this;
        this.sensors=[];
        this.sensorTypes=[];
        
        self.kerviService.spine.sendQuery("getSensorInfo",function(message){
            console.log("sensor info",message);
            
            self.updateSensors.call(self,message);
            self._sensors$.next(self.sensors);
            self._sensorTypes$.next(self.sensorTypes);
            
        });
    }

    public getSensors$(){
        return this._sensors$.asObservable()
    }

    public getDashboardSensors(dashboard:string){
        var result=[];
        for (let sensor of this.sensors){
            if (sensor.dashboards && sensor.dashboards.indexOf(dashboard)>=0)
                result.push(sensor);
        }
        return result;
    }

    public getSensorTypes$(){
        return this._sensorTypes$.asObservable();
    }

    public getSensorsOfType(type:string){
        var result=[];
        for (let sensor of this.sensors){
            if (sensor.type==type)
                result.push(sensor);
        }
        return result;
    }

    public getSensorById(id:string){
        for (let sensor of this.sensors){
            if (sensor.id==id)
                return sensor;
        }
        return null;
    }

    private updateSensors=function(message){
        if (Array.isArray(message)){
            for (var i=0;(i<message.length);i++){
                this.updateSensors(message[i]);
            }	
        } else {
            var sensor=new SensorModel();
            sensor.id=message.id;
            sensor.name=message.name;
            sensor.dashboards=message.dashboards;
            sensor.max=message.max;
            sensor.min=message.min;
            sensor.type=message.type;
            sensor.unit=message.unit;
            sensor.value$.next(message.value);
            sensor.sparkline$.next(message.sparkline);
            this.sensors.push(sensor);
            if (this.sensorTypes.indexOf(sensor.type)==-1)
                this.sensorTypes.push(sensor.type);
        }
    }
}