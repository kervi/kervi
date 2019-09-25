// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { NGXKerviService } from 'ngx-kervi';
import { Stream } from 'kervi-js';
import { DomSanitizer } from '@angular/platform-browser';
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
  @Input()
  streamData: any;
  private firstLoad = true;
  private fpsCounter = 0;
  private fpsTime = new Date();

  @Input()
  fps = 0;

  constructor( private kerviService: NGXKerviService, private domSanitizer: DomSanitizer) {
  
  }

  ngOnInit() {
    const self = this;
    this.stream = this.kerviService.GetStream(this.cameraSource, ['IMAGE_FRAME']);
    this.stream.events$.subscribe( function(event) {
      //console.log('ce', event);
      if (event) {
        self.streamData = self.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(event.data));
        self.fpsCounter += 1;
        const now   = new Date();
        const fpsDiff = now.getTime() - self.fpsTime.getTime();
        const seconds = fpsDiff / 1000;
        if (seconds > 1){
          self.fps = self.fpsCounter / seconds;
          console.log("fps", self.fpsCounter, seconds, this.cameraSource, self.fps);
          self.fpsCounter = 0;
          self.fpsTime = now;
        }
      }
    });
  }

  imageReady(){
    if (this.firstLoad){
        this.firstLoad=false;
        this.imageLoaded.emit(true);
    }
  }
}