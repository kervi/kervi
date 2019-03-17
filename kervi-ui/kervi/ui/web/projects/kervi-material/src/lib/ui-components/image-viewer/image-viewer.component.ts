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
declare var PhotoSwipe:any;
declare var PhotoSwipeUI_Default:any;

@Component({
  selector: 'kervi-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {
  @Input() camComponent:CamViewerComponent = null
  @Input() cameraSource: string;
  @Input() defaultSizes:DashboardSizes = new DashboardSizes();
  @Input() width:number = null;
  @Input() height:number = null;
  private firstLoad=true;
  constructor(private kerviService: KerviService, private elementRef: ElementRef) { 
    var self=this;
  }
    

  ngOnInit() {

 
  }

  show(){
    var self = this;
    var pswpElement = document.querySelectorAll('.pswp')[0];
    var items = [
         {
           src: 'https://placekitten.com/600/400',
           w: 600,
           h: 400
         }
      ]
    // define options (if needed)
    var options = {
        // optionName: 'option value'
        // for example:
        index: 0 // start at first slide
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
    setTimeout(() => {
      
    
    this.kerviService.spine.sendQuery(this.camComponent.cameraId+".getMedia", function(response){
      console.log("ir",response);
      

      for(let file of response.files ){
        console.log("f", response["path"] + "/" + file.name);
        gallery.items.push({
          src:response["path"] + "/" + file.name,
          h:400,
          w:600
        })
      }
      
      if (response.files.length > 0){
        gallery.goTo(2);
        gallery.items.splice(1,1);
        //gallery.invalidateCurrItems();
        // updates the content of slides
        gallery.updateSize(true);
      }
    })
  }, 500);
  }

 
}