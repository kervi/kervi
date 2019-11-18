// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input } from '@angular/core';
import { Controller, NumberValue } from 'kervi-js';
import { DashboardSizes  } from 'kervi-js';
import { NGXKerviService } from '../ngx-kervi.service';
import { AppInjector } from '../app-injector.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'kervi-camera-base',
  template: '',
  styleUrls: [],
})
export class KerviCameraComponent {
    @Input() streamObservers: Controller[] = [];
    @Input() public selectedSource: string;
    private cam: Controller;

    @Input() set cameraId(id: string) {
        console.log('setcamid', id);

        this.camera = this.kerviService.getComponent(id) as Controller;
    }
    @Input() set camera(v: Controller) {
        console.log('setcam', v);

        this.cam = v;
        if (v){
            for (let i of v.outputs) {
                if (i.id.endsWith('.pan')) {
                    this.pan = i as NumberValue;
                } else if (i.id.endsWith('.tilt')) {
                    this.tilt = i as NumberValue;
                }
            }
            this.cameraType = v.ui.type;
            if (this.cameraType === 'frame' ) {
                if (v.ui.source) {
                    this.cameraSource = this.cam.id;
                }
                this.cameraSource = this.cam.id;
            }
            this.updateStreamObservers();
        }
    }

    get camera() { return this.cam; }
    @Input() linkParameters: any = null;
    @Input() inline = false;
    @Input() dashboardSizes = new DashboardSizes();
    @Input() isBackground = false;

    protected kerviService: NGXKerviService;
    public pan: NumberValue;
    public tilt: NumberValue;
    public cameraType: string;
    public cameraSource: string;
    constructor() {
        const self = this;
        this.kerviService = AppInjector.get(NGXKerviService);
    }

    updateStreamObservers() {
        const streamObservers = [];
        const controllers = this.kerviService.getComponentsByType('controller');
        for (let controller of controllers) {
            if (controller.type === 'stream_observer') {
                if (controller.ui.sourceStream === this.cameraSource) {
                    streamObservers.push(controller);
                }
            }
        }
        this.streamObservers = streamObservers;
        if (this.selectedSource !== this.cameraSource){
            this.selectedSource = this.cameraSource;
        }
    }

    public setPan(v) {
        this.pan.set(v);
    }

    public setTilt(v) {
        this.tilt.set(v);
    }

    ngOnInitCamera() {
        console.log('ngi cam', this.camera.id);
        const self = this;
        if (!this.linkParameters) {
              this.linkParameters = this.camera.ui;
        }
        if (!this.inline && this.linkParameters.inline) {
            this.inline = true;
        }
        this.kerviService.componentsChanged$.subscribe(function() {
            self.updateStreamObservers();
        });
        this.updateStreamObservers();
        this.selectedSource = this.cameraSource;
    }

    changeSource(source: string) {
        console.log('cs', source);
        this.selectedSource = source;
      }
}
