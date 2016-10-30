import { Component, OnInit } from '@angular/core';
import { KerviService } from '../kervi.service';
import {BehaviorSubject, Subject} from 'rxjs/Rx';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css'],
  
})

export class PageHeaderComponent implements OnInit {
  public dashboards$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  constructor(private kerviService:KerviService) {
    
  }

  ngOnInit() {
    var self=this;
    this.kerviService.application$.subscribe(function(v){
      if (v){
        self.dashboards$.next(v.dashboards);
      }
    });
  }

}
