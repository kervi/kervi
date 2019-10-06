// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, Input } from '@angular/core';
import { Controller, NumberValue } from 'kervi-js';
import { DashboardSizes  } from 'kervi-js';
import { NGXKerviService } from '../ngx-kervi.service';
import { AppInjector } from '../app-injector.service';

@Component({
  selector: 'kervi-camera-base',
  template: '',
  styleUrls: [],
})
export class KerviCameraComponent {
    public streamObservers: Controller[] = [];
    private cam: Controller;

    @Input() set cameraId(id: string) {
        console.log('setcamid', id);

        this.camera = this.kerviService.getComponent(id) as Controller;
    };
    @Input() set camera(v: Controller) {
        console.log('setcam', v);
        this.cam = v;
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
        const controllers = this.kerviService.getComponentsByType('controller');
        for (let controller of controllers) {
            if (controller.type === 'stream_observer') {
                if (controller.ui.sourceStream === this.cameraSource) {
                    this.streamObservers.push(controller);
                }
            }
        }
        console.log("obs", this.streamObservers);
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
        this.kerviService = AppInjector.get(NGXKerviService);
    }

    public setPan(v){
        this.pan.set(v);
    }

    public setTilt(v){
        this.tilt.set(v);
    }

    ngOnInitCamera() {
        console.log("ngi cam");
        var self = this;
        if (!this.linkParameters)
              this.linkParameters = this.camera.ui;

        if (!this.inline && this.linkParameters.inline){
            this.inline = true;
        }


    }
}