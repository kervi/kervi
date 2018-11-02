import { Component, OnInit, Input } from '@angular/core';
import { DashboardSizes } from 'kervi-js';
@Component({
  selector: 'kervi-cam-viewer',
  templateUrl: './kervi-cam-viewer.component.html',
  styleUrls: ['./kervi-cam-viewer.component.css']
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
