// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { DynamicNumberModel } from '../../models/dynamicValues.model';
import { ControllerModel } from '../../models/controller.model';
import { DashboardSizes } from '../../models/dashboard.model'
import { KerviService } from '../../kervi.service';
//import { ControllersService } from '../controllers.service';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
declare var jQuery: any;

@Component({
  selector: 'kervi-cam-viewer',
  templateUrl: './cam-viewer.component.html',
  styleUrls: ['./cam-viewer.component.scss']
})
export class CamViewerComponent implements OnInit {
  @Input() cameraId: string = null;
  @Input() isBackground: boolean = false;
  @Input() parameters:any = null;
  @Input() defaultSizes:DashboardSizes = new DashboardSizes();
  camera$: BehaviorSubject<ControllerModel> = new BehaviorSubject<ControllerModel>(null);
  cameraSource$: BehaviorSubject<string> = new BehaviorSubject<string>("");
  cameraName$: BehaviorSubject<string> = new BehaviorSubject<string>("");
  padSize:number=180;
  private camSubscription: any;
  private currentCamSubscription: any;
  private panSubscription: any = null;
  private tiltSubscription: any = null;
  private moveDelayTimer = null;
  private pointOfInterests = [];
  private camWidth:number;
  private camHeight:number;
  private actions:any = null;
  //private img = new Image();
  private firstLoad=true;
  constructor(private kerviService: KerviService, private elementRef: ElementRef) { 
    var self=this;

    this.camera$.subscribe(function(v){
      //console.log("cse",v);
      
      if (self.panSubscription)
        self.panSubscription.unsubscribe();

      if (self.tiltSubscription)
        self.tiltSubscription.unsubscribe();

      if (v) {
        self.cameraName$.next(v.name);
        self.actions = v.actions;
        var pan = null;
        var tilt = null;
        for(var i of v.inputs){
          if (i.id.endsWith(".pan"))
            pan=i as DynamicNumberModel;
          else if (i.id.endsWith(".tilt"))
            tilt=i as DynamicNumberModel

        }
        if (pan){
          self.panSubscription = pan.value$.subscribe(function (v) {
            jQuery("input[name='x']", self.elementRef.nativeElement).val(v).change();
          });
        }

        if (tilt){
          self.tiltSubscription = tilt.value$.subscribe(function (v) {
            jQuery("input[name='y']", self.elementRef.nativeElement).val(v).change();
          });
        }
        if (v.ui && v.ui.type == "frame" ){
            if (v.ui.source)
              self.cameraSource$.next( v.ui.source.server + v.ui.source.path);
          
          
        }

      } else {
        self.cameraSource$.next("");
      }
    })
  }

  imageReady(){
        var h = jQuery(".video",this.elementRef.nativeElement).height();
        var w = jQuery(".video",this.elementRef.nativeElement).width();
        jQuery(".cam-pad-area", this.elementRef.nativeElement).css({ top: h / 2 - this.padSize/2, left: w / 2 - this.padSize/2 });
  }

  private timedRefresh() {
    //console.log("trx", this);
    
  }

  ngOnInit() {
    var self = this;
    if (this.cameraId){
      this.camera$.next(this.kerviService.getComponent(this.cameraId) as ControllerModel)  
    }

    var viewPortHeight = jQuery(window).height();
    var viewPortWidth = jQuery(window).width();

    this.camHeight = viewPortHeight - 65;
    this.camWidth = viewPortWidth; 

    setTimeout(function() {
      self.timedRefresh();
    
      var h = jQuery(".video",self.elementRef.nativeElement).height();
      var w = jQuery(".video",self.elementRef.nativeElement).width();

      if (w < self.padSize){
        self.padSize=w-10;
          //jQuery(".camPad", self.elementRef.nativeElement).css({ width: self.padSize, height:  self.padSize });

      }
      //console.log("cwp",h,w,self.padSize);

      var pan = null;
      var tilt = null
      if (self.camera$.value){
        for(var i of self.camera$.value.inputs){
          if (i.id.endsWith(".pan"))
            pan=i as DynamicNumberModel;
          else if (i.id.endsWith(".tilt"))
            tilt=i as DynamicNumberModel

        } 
      }

      if (pan)
        jQuery("input[name='x']", self.elementRef.nativeElement).val(pan.value$.value).change();
      
      if (tilt)
        jQuery("input[name='y']", self.elementRef.nativeElement).val(tilt.value$.value).change();  

      var color = "rgba(255,255,255,.5)";
      var p = jQuery('fieldset', self.elementRef.nativeElement).xy({
        displayPrevious: false
        , min: -100
        , max: 100
        , width: self.padSize
        , height: self.padSize
        , fgColor: color
        , bgColor: color
        , change: function (value) {
          if (self.moveDelayTimer) {
            clearTimeout(self.moveDelayTimer);
          }
          
          self.moveDelayTimer = setTimeout(function () {
            if (pan)
              self.kerviService.spine.sendCommand(pan.command, value[0]);
            if (tilt)
              self.kerviService.spine.sendCommand(tilt.command, value[1]);
          }, 200);
        }
      })
        .css({ 'border': '2px solid ' + color });
      
      jQuery(".cam-pad-area", self.elementRef.nativeElement).css({ top: h / 2 - (self.padSize/2), left:  w / 2 - (self.padSize / 2) });
      jQuery(".cam-pad-area", self.elementRef.nativeElement).show();
      jQuery(window).bind('resize', function () {
        //jQuery('#video-viewer').height(jQuery(window).height());
        var h = jQuery(".video",self.elementRef.nativeElement).height();
        var w = jQuery(".video",self.elementRef.nativeElement).width();
        jQuery(".cam-pad-area", self.elementRef.nativeElement).css({ top: h / 2 - self.padSize/2, left: w / 2 - self.padSize/2 });
      });
    }, 500);

    self.kerviService.IPCReady$.subscribe(function(ready){
      if (ready){
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

    self.kerviService.connected$.subscribe(function (connected) {

      if (connected) {
        
      }
    });

  }

  private updatePOI() {
    if (this.camera$.value) {
      var canvas = <HTMLCanvasElement>document.getElementById('poiCanvas');
      var context = canvas.getContext('2d');

      var cam = this.camera$.value;
      canvas.height = cam.ui.height;
      canvas.width = cam.ui.width;
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

  private browsePress(){
    
  }
}