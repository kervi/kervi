import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { ControllerModel } from '../models/controller.model';
import { KerviService } from '../../kervi.service';
import { ControllersService } from '../controllers.service';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
declare var jQuery:any;

@Component({
  selector: 'kervi-cam-viewer',
  templateUrl: './cam-viewer.component.html',
  styleUrls: ['./cam-viewer.component.css']
})
export class CamViewerComponent implements OnInit {
  camera$:BehaviorSubject<ControllerModel>=new BehaviorSubject<ControllerModel>(null);
  cameraSource$:BehaviorSubject<string>=new BehaviorSubject<string>("");
  @Input() dashboard:string;
  private camSubscription:any;
  private currentCamSubscription:any;
  private panSubscription:any=null;
  private tiltSubscription:any=null;

  constructor(private kerviService:KerviService,private controllersService:ControllersService, private elementRef:ElementRef) { }

  ngOnInit() {
      var self=this;
      this.camSubscription=this.controllersService.getCameraControllers$().subscribe(function(v){
        var camControllers=self.controllersService.getDashboardCameras(self.dashboard);
        if (camControllers.length>0)
          self.controllersService.setCurrentCamera(camControllers[0].id);
      });

      this.currentCamSubscription=this.controllersService.getCurrentCameraController$().subscribe(function(v){
        if (self.panSubscription)
          self.panSubscription.unsubscribe();
        
        if (self.tiltSubscription)
          self.tiltSubscription.unsubscribe();

        self.camera$.next(v);
        if (v){
          self.cameraSource$.next(v.parameters.source);
          self.panSubscription=v.axes[0].value$.subscribe(function(v){
            jQuery("input[name='x']",self.elementRef.nativeElement).val(v).change();
          });

          self.tiltSubscription=v.axes[1].value$.subscribe(function(v){
            jQuery("input[name='y']",self.elementRef.nativeElement).val(v).change();
          });
        } else {
          self.cameraSource$.next("");
        }
      });
      
			var color="#ffffff";
      var p=jQuery('fieldset',this.elementRef.nativeElement).xy({
				displayPrevious:false
				, min : 100
				, max : 100
				, width: 180
				, height: 180
				, fgColor:color
				, bgColor:color
				, change : function (value) {
						  self.kerviService.spine.sendCommand(self.camera$.value.axes[0].command,value[0]);
              self.kerviService.spine.sendCommand(self.camera$.value.axes[1].command,value[1]);
					}
				})
			.css({'border':'2px solid '+color});
  }
}