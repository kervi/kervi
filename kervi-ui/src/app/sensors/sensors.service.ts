import { Injectable , EventEmitter} from '@angular/core';
import {KerviService} from "../kervi.service";
import {BehaviorSubject, Subject} from 'rxjs/Rx';


@Injectable()
export class SensorsService {
    sensors = [] ;
    private sensors$: Subject<Object[]>;
    ready: BehaviorSubject<Boolean> ;
    
    constructor (private kerviService:KerviService){
        var self=this;
        this.sensors$=<Subject<Object[]>> new Subject();
        this.ready = new BehaviorSubject<Boolean>(false);
        if (this.kerviService.Connected.value){
            this.kerviService.spine.sendQuery("getSensorInfo",function(message){
                console.log("sensor info",message);
                self.updateSensors.call(self,message);
                self.ready.next(true);
            });
        } else {
            var s=this.kerviService.Connected.subscribe(function(connectedValue){
                if (connectedValue){
                    self.kerviService.spine.sendQuery("getSensorInfo",function(message){
                        console.log("sensor info",message);
                        self.updateSensors.call(self,message);
                        self.ready.next(true);
                    });    
                }
            });
        }


        this.kerviService.spine.addEventHandler("NewSensorReading","",function(){
            if (this.sensor!="AliveSensor"){
                //console.log("ns",this,self.sensors,self.sensorTypes,self.sensorTypes.length);
                
                for (let sensor of self.sensors){
                    if (sensor.id==this.id){
                        sensor.value==this.value
                        sensor.sparkline.push(this.value);
                        if (sensor.sparkline.length>10)
                            sensor.sparkline.shift();
                    }
                }
            }
        });
    }

    public getDashboardSensors(dashboard:string){
        var result=[];
        for (let sensor of this.sensors){
            console.log("gds",sensor);
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
            this.sensors.push(message);
        }
    }
}