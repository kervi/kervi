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
  padSize:number=180;
  private moveDelayTimer = null;
  
  
  constructor(private elementRef:ElementRef) { }

  ngOnInit() {
    var self = this;
    if (this.XValue){
      jQuery("input[name='x']", self.elementRef.nativeElement).val(this.XValue.value$.value).change();
      this.XValue.value$.subscribe(function (v) {
        jQuery("input[name='x']", self.elementRef.nativeElement).val(v).change();
      });
    }

    if (this.YValue){
      jQuery("input[name='y']", self.elementRef.nativeElement).val(this.YValue.value$.value).change();        
      this.YValue.value$.subscribe(function (v) {
        jQuery("input[name='y']", self.elementRef.nativeElement).val(v).change();
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
        }, 200);
      }
    })
    .css({ 'border': '2px solid ' + color });  
  }
}
