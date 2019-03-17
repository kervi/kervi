// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'kervi-mpeg-viewer',
  templateUrl: './mpeg-viewer.component.html',
  styleUrls: ['./mpeg-viewer.component.scss']
})
export class MPEGViewerComponent{
  @Input() cameraSource: string;
  @Input() width:number = null;
  @Input() height:number = null;
  @Output() imageLoaded = new EventEmitter();
  private firstLoad=true;
  constructor() { 
  }

  imageReady(){
    if (this.firstLoad){
        this.firstLoad=false;
        this.imageLoaded.emit(true);
    }
  }
}