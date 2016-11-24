import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ControllerDateTimeModel } from '../models/controller.model'
import { KerviService } from '../../kervi.service'
declare var jQuery: any;

@Component({
  selector: 'kervi-controller-datetime',
  templateUrl: './controller-datetime.component.html',
  styleUrls: ['./controller-datetime.component.css']
})
export class ControllerDateTimeComponent implements OnInit {
  @Input() datetime: ControllerDateTimeModel;
  @Input() dashboardType: string;
  private valueSubscription: any;
  constructor(private kerviService: KerviService, private elementRef: ElementRef) { }

  ngOnInit() {
    var self = this;
    self.valueSubscription = self.datetime.value$.subscribe(function (v) {
      jQuery('input', self.elementRef.nativeElement).bootstrapToggle(v ? 'on' : 'off', true);
    });

    setTimeout(function () {
      jQuery('input', self.elementRef.nativeElement).bootstrapToggle();
      jQuery('input', self.elementRef.nativeElement).change(function () {
        var value = jQuery('input', self.elementRef.nativeElement).value();
        console.log("dt", value);
        self.kerviService.spine.sendCommand(self.datetime.changeCommand,value);
        
      });
    }, 0);
  }


}
