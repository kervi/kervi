import { Injectable , EventEmitter} from '@angular/core';
import {KerviService} from "../kervi.service";
import {BehaviorSubject, Subject} from 'rxjs/Rx';
import { SensorModel } from './models/sensor.model'

@Injectable()
export class SensorsService {
    private sensors: SensorModel[] = [];
    private _sensors$: BehaviorSubject<SensorModel[]> = new BehaviorSubject<SensorModel[]>([]);
    
    constructor (private kerviService:KerviService){
        var self=this;
        
            var s=this.kerviService.connected$.subscribe(function(connectedValue){
                if (connectedValue){
                    self.kerviService.spine.sendQuery("getSensorInfo",function(message){
                        console.log("sensor info",message);
                        self.updateSensors.call(self,message);
                        self._sensors$.next(self.sensors);
                    });

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




                } else {
                    self.sensors=[];
                    self._sensors$.next(self.sensors);
                }
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
        }
    }
}