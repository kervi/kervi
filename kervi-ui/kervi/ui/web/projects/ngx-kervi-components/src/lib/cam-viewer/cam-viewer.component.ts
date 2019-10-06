import { Component, ElementRef,AfterViewInit, ViewChild } from '@angular/core';
import { KerviCameraComponent } from 'ngx-kervi'
declare var window: any;

@Component({
  selector: 'kervi-cam-viewer',
  templateUrl: './cam-viewer.component.html',
  styleUrls: ['./cam-viewer.component.css']
})
export class CamViewerComponent extends KerviCameraComponent implements AfterViewInit {
  public camHeight: number;
  public camWidth: number;
  public camPadLeft: number;
  public camPadTop: number;
  public showCamPad = false;
  @ViewChild("videoViewer") videoViewer: ElementRef;
  padSize= 180;
  constructor(private elementRef: ElementRef) {
    super();
  }

  imageLoaded(){
      //var h = this.videoViewer.nativeElement.offsetHeight;
      //var w = this.elementRef.nativeElement.offsetWidth;
       //this.camPadTop = h / 2 - this.padSize/2;
       //this.camPadLeft = w / 2 - this.padSize/2;
  }

  ngAfterViewInit(){
    var self = this; 
    var element = self.videoViewer.nativeElement;
    var viewPortHeight = window.innerHeight;
    var viewPortWidth = window.innerWidth;

    this.camHeight = viewPortHeight - 65;
    this.camWidth = viewPortWidth;
    console.log("avic", this.camHeight,this.camWidth);
    
    setTimeout(() => {
      
      var h = element.offsetHeight;
      var w = element.offsetWidth;
      if (w < self.padSize){
        self.padSize=w-10;
          //jQuery(".camPad", self.elementRef.nativeElement).css({ width: self.padSize, height:  self.padSize });
      }
      console.log("cami", h,w, self.padSize, element);
      self.camPadTop = h / 2 - (self.padSize/2)
      self.camPadLeft =  w / 2 - (self.padSize / 2);
      self.showCamPad = true;
    }, 0);

    // jQuery(window).bind('resize', function () {
    //     var h = element.offsetHeight;
    //     var w = element.offsetWidth;
    //     self.camPadTop = h / 2 - (self.padSize/2)
    //     self.camPadLeft =  w / 2 - (self.padSize / 2);
    // })
  };
  

  ngOnInit() {
    this.ngOnInitCamera();
  }
}
