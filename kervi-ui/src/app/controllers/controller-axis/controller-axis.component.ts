import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { ControllerAxisModel } from '../models/controller.model';
import { KerviService } from '../../kervi.service'
declare var jQuery:any;

@Component({
  selector: 'kervi-controller-axis',
  templateUrl: './controller-axis.component.html',
  styleUrls: ['./controller-axis.component.css']
})
export class ControllerAxisComponent implements OnInit {
  @Input() axis: ControllerAxisModel;
  @Input() dashboardType:string;
  constructor(private kerviService:KerviService, private elementRef:ElementRef) { }

  ngOnInit() {
      var self=this;
			var color="#ffffff";
      console.log("dta",this.dashboardType)
      if (this.dashboardType=="dashboard")
        color="#000000";
			var p=jQuery('fieldset',this.elementRef.nativeElement).xy({
				displayPrevious:false
				, min : this.axis.minValue
				, max : this.axis.maxValue
				, width: this.axis.orientation=="vertical" ? 30 : 180
				, height:this.axis.orientation=="vertical" ? 180 : 30
				, fgColor:color
				, bgColor:color
				, change : function (value) {
					if (self.axis.orientation=="vertical")
					{	
						  self.kerviService.spine.sendCommand(self.axis.command,value[1]);
					} else{
						self.kerviService.spine.sendCommand(self.axis.command,value[0]);
					}
				}
			})
			.css({'border':'2px solid '+color});

      self.axis.value$.subscribe(function(v){
        if (self.axis.orientation=="vertical")
          jQuery("input[name='y']",self.elementRef.nativeElement).val(v).change();
        else
          jQuery("input[name='x']",self.elementRef.nativeElement).val(v).change();
      });
			
		


  }

}
