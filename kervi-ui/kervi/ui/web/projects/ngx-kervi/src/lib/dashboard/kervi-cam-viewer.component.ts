import { Component, OnInit, Input } from '@angular/core';
import { DashboardSizes } from 'kervi-js';
@Component({
  selector: 'kervi-cam-viewer',
  template: ''
})
export class KerviCamViewerComponent implements OnInit {
  @Input() dashboardSizes: DashboardSizes = null;
  @Input() cameraId: string = null;
  @Input() isBackground: boolean = false;
  @Input() linkParameters:any = null;

  constructor() { }

  ngOnInit() {
  }

}
