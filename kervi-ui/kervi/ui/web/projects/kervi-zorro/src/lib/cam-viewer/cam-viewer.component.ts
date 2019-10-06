import { Component, ElementRef, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { KerviCameraComponent } from 'ngx-kervi';
declare var window: any;

@Component({
  selector: 'kervi-cam-viewer',
  templateUrl: './cam-viewer.component.html',
  styleUrls: ['./cam-viewer.component.css']
})
export class CamViewerComponent extends KerviCameraComponent implements OnInit, AfterViewInit {
  public camHeight: number;
  public camWidth: number;
  public camPadLeft: number;
  public camPadTop: number;
  public showCamPad = false;
  @Input()
  public selectedSource: string; 
  @ViewChild('videoViewer') videoViewer: ElementRef;
  padSize = 180;
  constructor(private elementRef: ElementRef) {
    super();
  }

  imageLoaded() {
  }

  ngAfterViewInit() {
    const self = this;
    const element = self.videoViewer.nativeElement;
    const viewPortHeight = window.innerHeight;
    const viewPortWidth = window.innerWidth;

    this.camHeight = viewPortHeight - 65;
    this.camWidth = viewPortWidth;
    console.log('avic', this.camHeight, this.camWidth);

    setTimeout(() => {

      const h = element.offsetHeight;
      const w = element.offsetWidth;
      if (w < self.padSize) {
        self.padSize = w - 10;
      }
      console.log('cami', h, w, self.padSize, element);
      self.camPadTop = h / 2 - (self.padSize / 2);
      self.camPadLeft =  w / 2 - (self.padSize / 2);
      self.showCamPad = true;
    }, 0);
  }

  ngOnInit() {
    this.ngOnInitCamera();
    this.selectedSource = this.cameraSource;
  }

  changeSource(source: string) {
    console.log("cs", source);
    this.selectedSource = source;
  }
}
