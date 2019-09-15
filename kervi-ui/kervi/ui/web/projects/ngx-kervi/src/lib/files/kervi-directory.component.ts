import { Component, OnInit, Input } from '@angular/core';
import { NGXKerviService } from '../ngx-kervi.service';
import { AppInjector } from '../app-injector.service';
import { Directory } from 'kervi-js';

@Component({
  selector: 'kervi-directory',
  template: ''
})
export class KerviDirectoryComponent {
    protected path = '/';
    protected directory: Directory = null;
    protected kerviService: NGXKerviService;

    constructor() {
        this.kerviService = AppInjector.get(NGXKerviService);
    }

    protected loadDirectory() {
        this.directory = this.kerviService.GetDirectory(this.path);
    }
}
