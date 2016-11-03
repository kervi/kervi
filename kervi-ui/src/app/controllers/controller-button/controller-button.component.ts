import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ControllerButtonModel } from '../models/controller.model'
import { KerviService } from '../../kervi.service'
declare var jQuery:any;

@Component({
  selector: 'kervi-controller-button',
  templateUrl: './controller-button.component.html',
  styleUrls: ['./controller-button.component.css']
})
export class ControllerButtonComponent implements OnInit {
  @Input() button: ControllerButtonModel;
  @Input() dashboardType:string;
  private valueSubscription:any;
  constructor(private kerviService:KerviService, private elementRef:ElementRef) { }


  public clickButton(){
    this.kerviService.spine.sendCommand(this.button.clickCommand);
  }
  ngOnInit() {
    var self=this;
    console.log("bt",this.button,this.elementRef.nativeElement);
    if (this.button.type=="switch"){
      self.valueSubscription=self.button.state$.subscribe(function(v){
        jQuery('input',self.elementRef.nativeElement).bootstrapToggle(v ? 'on' : 'off',true);
      });
      
      setTimeout(function(){
        jQuery('input',self.elementRef.nativeElement).bootstrapToggle();
        jQuery('input',self.elementRef.nativeElement).change(function() {
          var state= jQuery('input',self.elementRef.nativeElement).prop('checked');
          console.log("bs",state);
          if (state && !self.button.state$.value)
            self.kerviService.spine.sendCommand(self.button.onCommand);
          else if (!state && self.button.state$.value)
            self.kerviService.spine.sendCommand(self.button.offCommand);
        });
       },0);
    } 
  }

}
