import { Component, OnInit, OnDestroy } from '@angular/core';
import { KerviService } from '../kervi.service';
import {BehaviorSubject, Subject, Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css'],
  
})

export class PageHeaderComponent implements OnInit, OnDestroy {
  public dashboards$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  private appSubscription:any;
  constructor(private kerviService:KerviService) {
    
  }

  ngOnInit() {
    var self=this;
    this.appSubscription=this.kerviService.application$.subscribe(function(v){
      if (v){
        self.dashboards$.next(v.dashboards);
      }
    });
  }

  ngOnDestroy(){
    this.appSubscription.unsubscribe();
  }

}
