import { Component, Input, OnInit,ElementRef } from '@angular/core';
import { NumberValue } from "kervi-js"
declare var jQuery: any;

@Component({
  selector: 'kervi-controller-pad',
  templateUrl: './controller-pad.component.html',
  styleUrls: ['./controller-pad.component.css']
})
export class ControllerPadComponent implements OnInit {
  @Input() XValue:NumberValue;
  @Input() YValue:NumberValue;
  @Input() autoCenter:boolean;
  padSize:number=180;
  private moveDelayTimer = null;
  private inDrag:boolean = false;
  
  constructor(private elementRef:ElementRef) { }

  ngOnInit() {
    var self = this;
    if (this.XValue){
      jQuery("input[name='pad-x']", self.elementRef.nativeElement).val(this.XValue.value$.value).change();
      this.XValue.value$.subscribe(function (v) {
        console.log("pad-x", self.YValue.name, v);
        jQuery("input[name='pad-x']", self.elementRef.nativeElement).val(v).change();
      });
    }

    if (this.YValue){
      jQuery("input[name='pad-y']", self.elementRef.nativeElement).val(this.YValue.value$.value).change();        
      this.YValue.value$.subscribe(function (v) {
        console.log("pad-y", self.YValue.name, v);
        jQuery("input[name='pad-y']", self.elementRef.nativeElement).val(v).change();
      });
    }

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
          if (self.XValue)
            self.XValue.set(value[0]);
          if (self.YValue)
            self.YValue.set(value[1]);
        }, 0);
      }
    })
    .css({ 'border': '2px solid ' + color });  
  }

  padPress(){
    this.inDrag=true;
  }

  padRelease(){
    console.log("pr", this.inDrag, this.autoCenter);   
    this.inDrag=false;
       if (this.autoCenter && this.XValue){
         console.log("x-auto center");
         jQuery("input[name='pad-x']", this.elementRef.nativeElement).val(0).change();
         this.XValue.set(0);
       }
       if (this.autoCenter && this.YValue){
        console.log("y-auto center"); 
        jQuery("input[name='pad-y']", this.elementRef.nativeElement).val(0).change();
         this.YValue.set(0);
       }
  }


}
