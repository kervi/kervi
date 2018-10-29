// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { DynamicNumberModel } from '../../models/dynamicValues.model';
import { CamViewerComponent } from '../cam-viewer/cam-viewer.component'
import { KerviService } from '../../kervi.service';
import { DashboardSizes } from '../../models/dashboard.model';

//import { ControllersService } from '../controllers.service';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
declare var jQuery: any;

@Component({
  selector: 'kervi-mpeg-viewer',
  templateUrl: './mpeg-viewer.component.html',
  styleUrls: ['./mpeg-viewer.component.scss']
})
export class MPEGViewerComponent implements OnInit {
  @Input() camComponent:CamViewerComponent = null
  @Input() cameraSource: string;
  @Input() defaultSizes:DashboardSizes = new DashboardSizes();
  @Input() width:number = null;
  @Input() height:number = null;
  private firstLoad=true;
  constructor(private kerviService: KerviService, private elementRef: ElementRef) { 
    var self=this;
  }
    


  imageReady(){
    if (this.firstLoad){
        this.firstLoad=false;
        if (this.camComponent)
          this.camComponent.imageReady();
    }
    
  }


  ngOnInit() {
 
  }

 
}