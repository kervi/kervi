// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { NGXKerviService } from 'ngx-kervi';
import { Stream } from 'kervi-js';

@Component({
  selector: 'kervi-mpeg-viewer',
  templateUrl: './mpeg-viewer.component.html',
  styleUrls: ['./mpeg-viewer.component.scss']
})
export class MPEGViewerComponent implements OnInit{
  @Input() cameraSource: string;
  @Input() width: number = null;
  @Input() height: number = null;
  @Output() imageLoaded = new EventEmitter();
  stream: Stream;

  private firstLoad = true;
  constructor( private kerviService: NGXKerviService) {
    
  }

  ngOnInit(){
    this.stream = this.kerviService.GetStream(this.cameraSource);
    this.stream.events$.subscribe(function(event) {
      console.log("ce", event);
      
    });
  }

  imageReady(){
    if (this.firstLoad){
        this.firstLoad=false;
        this.imageLoaded.emit(true);
    }
  }
}