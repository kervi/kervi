import { Component, Input } from '@angular/core';
import { KerviCamViewerComponent } from 'ngx-kervi'
@Component({
  selector: 'kervi-cam-viewer',
  templateUrl: './cam-viewer.component.html',
  styleUrls: ['./cam-viewer.component.css']
})
export class CamViewerComponent extends KerviCamViewerComponent {
  
  constructor() { 
    super();
  }

  ngOnInit() {
  }

}
