import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ControllerModel } from '../models/controller.model'
import { ControllersService } from '../controllers.service'
import { Observable, BehaviorSubject } from 'rxjs/Rx';
@Component({
  selector: 'kervi-controllers',
  templateUrl: './controllers.component.html',
  styleUrls: ['./controllers.component.css']
})
export class ControllersComponent implements OnInit, OnDestroy {
  @Input() dashboard:string;
  @Input() dashboardType:string;
  controllerTypes$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  private ctSubscription:any;
  constructor(private controllersService:ControllersService) { 
    
    

  }

  public getControllers(type){
    return this.controllersService.getDashboardControllers(this.dashboard,type);
  }

  ngOnInit() {
    var self=this;
    this.ctSubscription=this.controllersService.getControllerTypes$().subscribe(function(v){
      var r=[];
      for (let s of v){
        var cl=self.controllersService.getDashboardControllers(self.dashboard,s);
        console.log("cs",self.dashboard,s,cl);
        if (cl.length){
          r.push(s);
        }
      }
      self.controllerTypes$.next(r);
    });
  }

  ngOnDestroy(){
    this.ctSubscription.unsubscribe();
  }

}
