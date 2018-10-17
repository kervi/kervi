import { Component, OnInit, OnDestroy, NgZone, ElementRef } from '@angular/core';
import { KerviService } from "../../kervi.service";
import { DashboardsService } from "../dashboards.service";
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardModel, DashboardSectionModel, DashboardSizes } from '../../models/dashboard.model'
import { ControllerModel } from '../../models/controller.model'
import {  DynamicNumberModel } from '../../models/dynamicValues.model'
import { BehaviorSubject, Subject, Observable } from 'rxjs/Rx';

declare var jQuery: any;

@Component({
  selector: 'app-dashboard',
  //providers: [ KerviService ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  public dashboards$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public dashboardCount:Number = 0;
  public componentsCount:Number = 0;
  public dashboardId:string;
  public dashboard:DashboardModel;
  public sections: DashboardSectionModel[] = [];
  public authenticated:Boolean = false;
  public sectionRows: any[]=[];
  public cameraId: string = null;
  public cameraParameters:any = null;
  public dashboardSectionsHidden:boolean=false;
  public showSectionController:boolean;
  private anonymous:Boolean = true;
  private routeSubscription;
  private padSize = 180;
  private moveLeftDelayTimer = null;
  private moveRightDelayTimer = null;
  private showLeftPad = false;
  private showRightPad = false;
  private inLeftPadDrag:boolean = false;
  private inRightPadDrag:boolean = false;
  private autoZeroLeftPad:boolean = false;
  private autoZeroRightPad:boolean = false;
  private showMenu:boolean = true;
  private defaultSizes:DashboardSizes = new DashboardSizes();

  private leftXValue: DynamicNumberModel = null;
  private leftYValue: DynamicNumberModel = null;

  private rightXValue: DynamicNumberModel = null;
  private rightYValue: DynamicNumberModel = null;
  private inFullScreen:boolean = false;
  
  constructor(private elementRef:ElementRef, private zone:NgZone, private kerviService:KerviService, private dashboardsService:DashboardsService, private router:Router, private activatedRoute:ActivatedRoute) {
      
   }
    
    logoff(event){
      this.kerviService.logoff();
      event.stopPropagation();
    }

   padPress(pad:string){
     if (pad=="left")
        this.inLeftPadDrag=true;

      if (pad=="right")
        this.inRightPadDrag=true;  
   }

   padRelease(pad:string){
     if (pad=="left")
        this.inLeftPadDrag=false;
        if (this.autoZeroLeftPad && this.leftXValue){
          jQuery("input[name='left-x']", this.elementRef.nativeElement).val(0).change();
          this.kerviService.spine.sendCommand(this.leftXValue.command, 0);
        }
        if (this.autoZeroLeftPad && this.leftYValue){
          jQuery("input[name='left-y']", this.elementRef.nativeElement).val(0).change();
          this.kerviService.spine.sendCommand(this.leftYValue.command, 0);
        }
      
     if (pad=="right")
        this.inRightPadDrag=false;
        if (this.autoZeroRightPad && this.rightXValue){
          jQuery("input[name='right-x']", this.elementRef.nativeElement).val(0).change();
          this.kerviService.spine.sendCommand(this.rightXValue.command, 0);
        }
        if (this.autoZeroRightPad && this.rightYValue){
          jQuery("input[name='right-y']", this.elementRef.nativeElement).val(0).change();
          this.kerviService.spine.sendCommand(this.rightYValue.command, 0);
        }
   }

   toggleFullScreen() {
    var doc:any;
    doc = document;
    if ((doc.fullScreenElement && doc.fullScreenElement !== null) ||    
     (!doc.mozFullScreen && !document.webkitIsFullScreen)) {
       this.inFullScreen = true;
      if (doc.documentElement.requestFullScreen) {  
        doc.documentElement.requestFullScreen();  
      } else if (doc.documentElement.mozRequestFullScreen) {  
        doc.documentElement.mozRequestFullScreen();  
      } else if (document.documentElement.webkitRequestFullScreen) {  
        doc.documentElement.webkitRequestFullScreen();  
      }  
    } else {  
      this.inFullScreen=false;
      if (doc.cancelFullScreen) {  
        doc.cancelFullScreen();  
      } else if (doc.mozCancelFullScreen) {  
        doc.mozCancelFullScreen();  
      } else if (document.webkitCancelFullScreen) {  
        doc.webkitCancelFullScreen();  
      }  
    }  
  }


  ngOnInit() {
    console.log("db init", this);
    var self = this;
    this.dashboardsService.getDashboards$().subscribe(function (v) {
        self.dashboardCount = v.length;
        self.componentsCount = self.dashboardsService.componentsCount;
        console.log("dc", self.dashboardCount, self.componentsCount);
        self.showMenu = (self.dashboardCount > 1 || self.kerviService.doAuthenticate);
        self.anonymous = self.kerviService.isAnonymous();
        self.dashboards$.next(v);
        
    });
    this.authenticated = this.kerviService.doAuthenticate;
    if (!this.kerviService.connected$.value)
      this.router.navigate(['/connect']);
    
    this.routeSubscription = this.activatedRoute.params.subscribe(params => {
      this.dashboardId = params['name']; 
      self.setupDashboard();

      this.dashboardsService.getDashboards$().subscribe(function(v){
        self.setupDashboard()
      })
    });
  }

  ngOnDestroy(){
    this.routeSubscription.unsubscribe();
  }

  private setupDashboard(){
    console.log("setup dashboard")
    var self = this;
    this.dashboard=this.dashboardsService.getDashboardById(this.dashboardId);
    if (this.dashboard){
      this.dashboardSectionsHidden=false;
      this.showSectionController=false;
        this.cameraId=null;
        this.cameraParameters=null;
      
      if (this.dashboard.backgroundSection){
        if (this.dashboard.backgroundSection.components.length > 0)
        {
          this.dashboardSectionsHidden=true;
          this.showSectionController=true;
          this.cameraId=this.dashboard.backgroundSection.components[0].component.id;
          this.cameraParameters=this.dashboard.backgroundSection.components[0].parameters;
          console.log("cam", this.cameraId, this.cameraParameters);
        }
      }

      var rowSize=3;
      this.sectionRows=[]
      var currentRow=[];
      this.sectionRows.push(currentRow);
      for(var section of this.dashboard.sections){
          currentRow.push(section);
          if (currentRow.length==rowSize){
            currentRow= [];
            this.sectionRows.push(currentRow);
          }
      }

      if (this.dashboard.LeftPadXSection && this.dashboard.LeftPadXSection.components.length || this.dashboard.LeftPadYSection && this.dashboard.LeftPadYSection.components.length){
        this.showLeftPad = true;
        if (self.dashboard.LeftPadXSection.components.length){
          self.leftXValue=self.dashboard.LeftPadXSection.components[0].component as DynamicNumberModel
          if (self.dashboard.LeftPadXSection.components[0].parameters.padAutoCenter)
            self.autoZeroLeftPad = true;
        }
        if (self.dashboard.LeftPadYSection.components.length){
          self.leftYValue=self.dashboard.LeftPadYSection.components[0].component as DynamicNumberModel
          if (self.dashboard.LeftPadYSection.components[0].parameters.padAutoCenter)
            self.autoZeroLeftPad = true;
        }
        //console.log("lc",self.dashboard.LeftPadXSection, self.dashboard.LeftPadYSection,this.leftXValue,this.leftYValue)

        if (self.leftXValue){
          self.leftXValue.value$.subscribe(function (v) {
            if (!this.inLeftPadDrag)
              jQuery("input[name='left-x']", self.elementRef.nativeElement).val(v).change();
          });
        }

        if (self.leftYValue){
          self.leftYValue.value$.subscribe(function (v) {
            if (!this.inLeftPadDrag)
              jQuery("input[name='left-y']", self.elementRef.nativeElement).val(v).change();
          });
        }


        setTimeout(function() {

          var h = window.innerHeight;
          var w = window.innerWidth;
          jQuery(".left-pad-area", self.elementRef.nativeElement).css({ top: h / 2 - (self.padSize/2), left:  w / 4 - (self.padSize / 2) });

          jQuery(window).bind('resize', function () {
            var h = window.innerHeight;
            var w = window.innerWidth;
            jQuery(".left-pad-area", self.elementRef.nativeElement).css({ top: h / 2 - self.padSize/2, left: w / 4 - self.padSize/2 });
          });

          if (self.leftXValue)
            jQuery("input[name='left-x']", self.elementRef.nativeElement).val(self.leftXValue.value$.value).change();
           if (self.leftYValue)
            jQuery("input[name='left-y']", self.elementRef.nativeElement).val(self.leftYValue.value$.value).change();
          
          var color = "rgba(255,255,255,.5)";
          var p = jQuery('#leftPad').xy({
            displayPrevious: false
            , min: -100
            , max: 100
            , width: self.padSize
            , height: self.padSize
            , fgColor: color
            , bgColor: color
            , change: function (value) {
                if (self.moveLeftDelayTimer) {
                  clearTimeout(self.moveLeftDelayTimer);
                }
              
                self.moveLeftDelayTimer = setTimeout(function () {
                  if (self.leftXValue && self.inLeftPadDrag)
                    self.kerviService.spine.sendCommand(self.leftXValue.command, value[0]);
                  if (self.leftYValue && self.inLeftPadDrag)
                    self.kerviService.spine.sendCommand(self.leftYValue.command, value[1]);
                }, 200);
              }
            })
            .css({ 'border': '2px solid ' + color });
      }, 0);
    }
    

    if (this.dashboard.RightPadXSection && this.dashboard.RightPadXSection.components.length || this.dashboard.RightPadYSection && this.dashboard.RightPadYSection.components.length){
        this.showRightPad = true;

        if (self.dashboard.RightPadXSection.components.length){
          self.rightXValue=self.dashboard.RightPadXSection.components[0].component as DynamicNumberModel
          if (self.dashboard.RightPadXSection.components[0].parameters.padAutoCenter)
            self.autoZeroRightPad = true;
        }
        if (self.dashboard.RightPadYSection.components.length){
          self.rightYValue=self.dashboard.RightPadYSection.components[0].component as DynamicNumberModel
          if (self.dashboard.RightPadYSection.components[0].parameters.padAutoCenter)
            self.autoZeroRightPad = true;
        }
        
        if (self.rightXValue){
          self.rightXValue.value$.subscribe(function (v) {
            if (!this.inLeftPadDrag)
              jQuery("input[name='right-x']", self.elementRef.nativeElement).val(v).change();
          });
        }

        if (self.rightYValue){
          self.rightYValue.value$.subscribe(function (v) {
            if (!this.inLeftPadDrag)
              jQuery("input[name='right-y']", self.elementRef.nativeElement).val(v).change();
          });
        }



        setTimeout(function() {
          var color = "rgba(255,255,255,.5)";
          
          var h = window.innerHeight;
          var w = window.innerWidth;
          jQuery(".right-pad-area", self.elementRef.nativeElement).css({ top: h / 2 - (self.padSize/2), left: w - (w / 4) - (self.padSize / 2) });

          jQuery(window).bind('resize', function () {
            var h = window.innerHeight;
            var w = window.innerWidth;
            jQuery(".right-pad-area", self.elementRef.nativeElement).css({ top: h / 2 - self.padSize/2, left: w -(w / 4) - self.padSize/2 });
          });
          
          if (self.rightXValue)
            jQuery("input[name='right-x']", self.elementRef.nativeElement).val(self.rightXValue.value$.value).change();
          if (self.rightYValue)
            // jQuery("input[name='right-y']", self.elementRef.nativeElement).val(self.rightYValue.value$.value).change();
          var p = jQuery('#rightPad').xy({
            displayPrevious: false,
            min: -100,
            max: 100,
            width: self.padSize,
            height: self.padSize,
            fgColor: color,
            bgColor: color,
            change: function (value) {
                if (self.moveRightDelayTimer) {
                  clearTimeout(self.moveRightDelayTimer);
                }
              
                
                self.moveRightDelayTimer = setTimeout(function () {
                  if (self.rightXValue)
                    self.kerviService.spine.sendCommand(self.rightXValue.command, value[0]);
                  if (self.rightYValue)
                    self.kerviService.spine.sendCommand(self.rightYValue.command, value[1]);
                }, 200);
              }
            })
            .css({ 'border': '2px solid ' + color });
      }, 0);
    }

    }
      
    //console.log("dbbcx", this.cameraId, this.cameraParameters);
  }
  
}
