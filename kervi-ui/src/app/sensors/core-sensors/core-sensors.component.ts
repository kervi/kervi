import { Component, OnInit } from '@angular/core';
import { SensorsService } from '../sensors.service';
import {BehaviorSubject, Subject} from 'rxjs/Rx';

@Component({
  selector: 'core-sensors',
  templateUrl: './core-sensors.component.html',
  styleUrls: ['./core-sensors.component.css']
})
export class CoreSensorsComponent implements OnInit {
  private _sensors : BehaviorSubject<Object[]>;
  constructor(private sensorsService:SensorsService) {
    var self=this;
    this._sensors= new BehaviorSubject<Object[]>([]);
    sensorsService.ready.subscribe(function(v){
      console.log("core sensors ready",v,sensorsService.sensors);
      if (v){
        self._sensors.next(sensorsService.getDashboardSensors("cpu"));
      }
    })
    //var sensors=kerviService.Sensors("core");
   }

   public sensors(){
     return this._sensors.asObservable();
   }

  ngOnInit() {
  }

}
