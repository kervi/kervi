// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { ControllerModel, ControllerInputModel } from '../models/controller.model';
import { KerviService } from '../../kervi.service';
import { ControllersService } from '../controllers.service';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
declare var jQuery: any;

@Component({
  selector: 'kervi-cam-viewer',
  templateUrl: './cam-viewer.component.html',
  styleUrls: ['./cam-viewer.component.css']
})
export class CamViewerComponent implements OnInit {
  camera$: BehaviorSubject<ControllerModel> = new BehaviorSubject<ControllerModel>(null);
  cameraSource$: BehaviorSubject<string> = new BehaviorSubject<string>("");
  @Input() dashboard: string;
  private camSubscription: any;
  private currentCamSubscription: any;
  private panSubscription: any = null;
  private tiltSubscription: any = null;
  private moveDelayTimer = null;
  private pointOfInterests = [];
  constructor(private kerviService: KerviService, private controllersService: ControllersService, private elementRef: ElementRef) { }

  ngOnInit() {
    var self = this;
    this.camSubscription = this.controllersService.getCameraControllers$().subscribe(function (v) {
      var camControllers = self.controllersService.getDashboardCameras(self.dashboard);
      if (camControllers.length > 0)
        self.controllersService.setCurrentCamera(camControllers[0].id);
    });

    this.currentCamSubscription = this.controllersService.getCurrentCameraController$().subscribe(function (v) {
      if (self.panSubscription)
        self.panSubscription.unsubscribe();

      if (self.tiltSubscription)
        self.tiltSubscription.unsubscribe();

      self.camera$.next(v);
      if (v) {
        self.cameraSource$.next(v.parameters.source);
        var pan = v.components[0] as ControllerInputModel;
        var tilt = v.components[1] as ControllerInputModel;
        self.panSubscription = pan.value$.subscribe(function (v) {
          jQuery("input[name='x']", self.elementRef.nativeElement).val(pan.value$.value).change();
        });


        self.tiltSubscription = tilt.value$.subscribe(function (v) {
          jQuery("input[name='y']", self.elementRef.nativeElement).val(tilt.value$.value).change();
        });
      } else {
        self.cameraSource$.next("");
      }
    });

    var color = "rgba(255,255,255,.5)";
    var p = jQuery('fieldset', this.elementRef.nativeElement).xy({
      displayPrevious: false
      , min: -100
      , max: 100
      , width: 180
      , height: 180
      , fgColor: color
      , bgColor: color
      , change: function (value) {
        if (self.moveDelayTimer) {
          clearTimeout(self.moveDelayTimer);
        }
        self.moveDelayTimer = setTimeout(function () {
          var pan = self.camera$.value.components[0] as ControllerInputModel;
          var tilt = self.camera$.value.components[1] as ControllerInputModel;
          self.kerviService.spine.sendCommand(pan.command, value[0]);
          self.kerviService.spine.sendCommand(tilt.command, value[1]);
        }, 200);
      }
    })
      .css({ 'border': '2px solid ' + color });
    var h = jQuery(window).height();
    var w = jQuery(window).width();
    jQuery(".cam-pad-area").css({ top: h / 2 - 100, left: w / 2 - 100 });

    jQuery(window).bind('resize', function () {
      //jQuery('#video-viewer').height(jQuery(window).height());
      var h = jQuery(window).height();
      var w = jQuery(window).width();
      jQuery(".cam-pad-area").css({ top: h / 2 - 100, left: w / 2 - 100 });
    });


    self.kerviService.connected$.subscribe(function (connected) {

      if (connected) {
        self.kerviService.spine.addEventHandler("pointOfInterestChange", "", function () {
          console.log("poi change", this);
          if (this.action == "add") {
            self.pointOfInterests.push(this.pointOfInterest)
          } else if (this.action == "update") {
            for (var i = 0; (self.pointOfInterests.length); i++) {
              var poi = self.pointOfInterests[i];
              if (poi.id == this.pointOfInterest.id) {
                self.pointOfInterests[i] = this.pointOfInterest;
                break;
              }
            }
          } else if (this.action == "delete") {
            for (var i = 0; (self.pointOfInterests.length); i++) {
              var poi = self.pointOfInterests[i];
              if (poi.id == this.pointOfInterest.id) {
                self.pointOfInterests.splice(i, 1)
                break;
              }
            }
          } else if (this.action == "clear") {
            for (var i = 0; (self.pointOfInterests.length); i++) {
              var poi = self.pointOfInterests[i];
              if (poi.cameraId == this.cameraId && poi.visionId == this.visionId) {
                self.pointOfInterests.splice(i, 1)
              }
            }
          }
          self.updatePOI();

        });
      }
    });

  }

  private updatePOI() {
    if (this.camera$.value) {
      var canvas = <HTMLCanvasElement>document.getElementById('camCanvas');
      var context = canvas.getContext('2d');

      var cam = this.camera$.value;
      canvas.height = cam.parameters.height;
      canvas.width = cam.parameters.width;
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (var i in this.pointOfInterests) {
        var poi = this.pointOfInterests[i];
        context.beginPath();
        context.rect(poi.position[0], poi.position[1], poi.size[0], poi.size[1]);
        context.fillStyle = 'rgba(255, 255, 255, 0.5)';
        context.fill();
        context.lineWidth = 1;
        context.strokeStyle = 'green';
        context.stroke();
      }
    }
  }
}