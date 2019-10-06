// Copyright (c) 2019, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { KerviDirectoryComponent } from 'ngx-kervi';
import { NzFormatEmitEvent, NzTreeNodeOptions, NzTreeComponent } from 'ng-zorro-antd';
import { ImgViewerComponent } from '../image-viewer/image-viewer.component';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent extends KerviDirectoryComponent implements OnInit {
  @ViewChild('nzTreeComponent') nzTreeComponent: NzTreeComponent;
  @ViewChild('imageViewer') imageViewer: ImgViewerComponent;
  @Input() files = [

  ];
  showImageViewer = false;
  directoryFiles = {};


  @Input() nodes: NzTreeNodeOptions[] = [
    { title: 'root', key: '/' }
  ];

  defaultExpandedKeys = [];

  constructor( ) {
    super();
   }

  ngOnInit() {
  }

  nzEvent(event: Required<NzFormatEmitEvent>): void {
    console.log('trev', event);
    const node = event.node;
    if (event.eventName === 'click') {
      this.files = [];
      this.kerviService.GetDirectory(node.key).then( d => {
        const files = d.files$.getValue();
        for(const file of files) {
          if (file.isFile){
            this.kerviService.GetThumbnail(file.path).then( t =>{
              this.files.push( { title: file.name, key: file.path, thumb: t});
            });
          }
        }
      });
    }
    if (event.eventName === 'expand') {
      if (node && node.getChildren().length === 0 && node.isExpanded) {
        this.kerviService.GetDirectory(node.key).then( d => {
          const files = d.files$.getValue();
          const dirs = [];
          for(const file of files) {
            if (!file.isFile) {
              dirs.push({ title: file.name, key: file.path, isLeaf: false});
            }
          }
          node.addChildren(dirs);
        });
      }
    }
  }

  showImage(filePath) {
    this.showImageViewer = true;
    this.imageViewer.imgTotal = this.files.length;
    this.kerviService.GetFile(filePath).then( f => {
      this.imageViewer.images = ['data:image/png;base64,' + f];
      this.imageViewer.showImg();
    });
  }

  nextImage(event){
    console.log("ni", event);
    const filePath = this.files[this.imageViewer.currentImgIndex-1].key;
    this.kerviService.GetFile(filePath).then( f => {
      this.imageViewer.images = ['data:image/png;base64,' + f];
      this.imageViewer.showImg();
    });
  }

  closeViewer(){
    this.showImageViewer = false;
  }
}
