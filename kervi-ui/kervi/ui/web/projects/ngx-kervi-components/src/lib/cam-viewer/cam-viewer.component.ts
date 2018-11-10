import { Component, ElementRef,AfterViewInit } from '@angular/core';
import { KerviCameraComponent } from 'ngx-kervi'
declare var jQuery: any;
declare var window:any;

@Component({
  selector: 'kervi-cam-viewer',
  templateUrl: './cam-viewer.component.html',
  styleUrls: ['./cam-viewer.component.css']
})
export class CamViewerComponent extends KerviCameraComponent implements AfterViewInit {
  public camHeight:number;
  public camWidth:number;
  padSize:number=180;
  constructor(private elementRef: ElementRef) { 
    super();
  }

  imageLoaded(){
      var h = jQuery(".video",this.elementRef.nativeElement).height();
      var w = jQuery(".video",this.elementRef.nativeElement).width();
      jQuery(".cam-pad-area", this.elementRef.nativeElement).css({ top: h / 2 - this.padSize/2, left: w / 2 - this.padSize/2 });
  }

  ngAfterViewInit(){
    console.log("avic");
    var self = this; 
    //var viewPortHeight = jQuery(window).height();
    //var viewPortWidth = jQuery(window).width();

    var viewPortHeight = window.height;
    var viewPortWidth = window.width;

    this.camHeight = viewPortHeight - 65;
    this.camWidth = viewPortWidth;
    setTimeout(() => {
      var h = self.elementRef.nativeElement.height;
      var w = self.elementRef.nativeElement.width;
      if (w < self.padSize){
        self.padSize=w-10;
          //jQuery(".camPad", self.elementRef.nativeElement).css({ width: self.padSize, height:  self.padSize });
      }
      console.log("cami", h,w, self.padSize)
      jQuery(".cam-pad-area", self.elementRef.nativeElement).css({ top: h / 2 - (self.padSize/2), left:  w / 2 - (self.padSize / 2) });
      jQuery(".cam-pad-area", self.elementRef.nativeElement).show();
    }, 0);
    jQuery(window).bind('resize', function () {
        //jQuery('#video-viewer').height(jQuery(window).height());
        var h = jQuery(".video",self.elementRef.nativeElement).height();
        var w = jQuery(".video",self.elementRef.nativeElement).width();
        jQuery(".cam-pad-area", self.elementRef.nativeElement).css({ top: h / 2 - self.padSize/2, left: w / 2 - self.padSize/2 });
    })
  };
  

  ngOnInit() {
    console.log("oic")
    this.ngOnInitCamera();
  }
}
