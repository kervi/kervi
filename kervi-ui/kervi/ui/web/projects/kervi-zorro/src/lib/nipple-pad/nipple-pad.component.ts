import { Component, Input, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Observable, fromEvent, BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { NumberValue } from 'kervi-js';
import * as nipplejs from 'nipplejs';
import { takeUntil, tap, switchMap, publishReplay, refCount, take, map, delay, repeat, mergeMap, debounceTime } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
//declare var nipplejs: any;

@Component({
  selector: 'kervi-nipple-pad',
  templateUrl: './nipple-pad.component.html',
  styleUrls: ['./nipple-pad.component.css']
})
export class NipplePadComponent implements OnInit, AfterViewInit {
    @Input() XValue: NumberValue;
    @Input() YValue: NumberValue;
    @Input() autoCenter: boolean;
    @Input() mode = 'semi';


    private XMin = 0;
    private XMax = 0;
    private YMin = 0;
    private YMax = 0;
    @ViewChild('nipplePad') nipplePad;
    private manager: nipplejs.JoystickManager;
    private moveDelayTimer = null;

    constructor() {

    }

    ngOnInit(): void {

    }
    ngAfterViewInit() {
        const self = this;
        this.XMax = this.XValue != null ? this.XValue.maxValue : 0;
        this.XMin = this.XValue != null ? this.XValue.minValue : 0;
        this.YMax = this.YValue != null ? this.YValue.maxValue : 0;
        this.YMin = this.XValue != null ? this.YValue.minValue : 0;
        console.log('np', this.nipplePad, this.nipplePad.nativeElement);
        this.manager = nipplejs.create( {
            zone: this.nipplePad.nativeElement,
            position: {left: '50%', top: '50%'},
            mode: 'semi',
            restJoystick: this.autoCenter
        });

        this.manager.on('start',  (evt, nipple) => {
            console.log('np start', nipple);
          });

        this.manager.on('move',  (evt, nipple) => {
            console.log('np move', nipple);
            const x = nipple.vector.x;
            const y = nipple.vector.y;
            if (self.moveDelayTimer) {
                clearTimeout(self.moveDelayTimer);
            }
            self.moveDelayTimer = setTimeout(function () {
                if (self.XValue) {
                  let valueX = 0;
                    if (x < 0) {
                        valueX = self.XMin * x;
                    } else if (x > 0) {
                        valueX = self.XMax * x;
                    }
                    self.XValue.set(valueX);
                }

                if (self.YValue) {
                    let valueY = 0;
                      if (y < 0) {
                          valueY = self.YMin * y;
                      } else if (y > 0) {
                          valueY = self.YMax * y;
                      }
                      self.YValue.set(valueY);
                  }
              }, 0);
          });

        this.manager.on('end',  (evt, nipple) => {
            console.log('np end', nipple);
            if (self.autoCenter) {
                if (self.XValue) {
                    self.XValue.set(0);
                }
                if (self.YValue) {
                    self.YValue.set(0);
                }
            }
          });
      }
}
