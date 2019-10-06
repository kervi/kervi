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
  @Input() set cameraSource(id: string) {
    console.log('set cam source', id);
    this.setSource(id);
};
  
  @Input() width: number = null;
  @Input() height: number = null;
  @Output() imageLoaded = new EventEmitter();
  stream: Stream = null;
  @Input()
  streamData: any;
  private firstLoad = true;
  private fpsCounter = 0;
  private fpsTime = new Date();
  private streamSubscription = null;

  @Input()
  fps = 0;

  constructor( private kerviService: NGXKerviService, private domSanitizer: DomSanitizer) {
  
  }

  ngOnInit() {
    const self = this;
  }

  setSource(source: string) {
    console.log("sc", source);
    const self = this;
    if (this.stream) {
      this.streamSubscription.unsubscribe();
    }
    this.stream = this.kerviService.GetStream(source, ['IMAGE_FRAME']);
    console.log("scx", this.stream);
    this.streamSubscription = this.stream.events$.subscribe( function(event) {
      //console.log('ce', event);
      if (event) {
        var blob = new Blob( [ event.data ], { type: "image/png" } );
        self.streamData = self.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
        self.fpsCounter += 1;
        const now   = new Date();
        const fpsDiff = now.getTime() - self.fpsTime.getTime();
        const seconds = fpsDiff / 1000;
        if (seconds > 1) {
          self.fps = self.fpsCounter / seconds;
          console.log('fps', self.fpsCounter, seconds, source, self.fps);
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