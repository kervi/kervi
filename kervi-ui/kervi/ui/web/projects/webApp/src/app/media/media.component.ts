import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { KerviDirectoryComponent } from 'ngx-kervi';
import { NzFormatEmitEvent, NzTreeNodeOptions, NzTreeComponent } from 'ng-zorro-antd';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent extends KerviDirectoryComponent implements OnInit {
  @ViewChild('nzTreeComponent', { static: false }) nzTreeComponent: NzTreeComponent;
  @Input() files = [

  ];

  directoryFiles = {};

  @Input() nodes: NzTreeNodeOptions[] = [
    { title: 'root', key: '/' }
  ];

  defaultExpandedKeys = [];

  constructor( ) {
    super();
   }

  ngOnInit() {
    const self = this;
  }

  nzEvent(event: Required<NzFormatEmitEvent>): void {
    console.log("trev", event);
    const node = event.node;
    if (event.eventName == 'click') {
      this.files = [];
      const d = this.kerviService.GetDirectory(node.key).then( d => {
        const files = d.files$.getValue();
        for(const file of files) {
          if (file.isFile){
            this.kerviService.GetThumbnail(file.path).then( t =>{
              this.files.push( { title: file.name, key: file.path, data: t});
            });
          }
        }
      });
    }
    if (event.eventName === 'expand') {
      if (node && node.getChildren().length === 0 && node.isExpanded) {
        const d = this.kerviService.GetDirectory(node.key).then( d =>{
          const files = d.files$.getValue();
          const dirs = [];
          for(const file of files) {
              if (!file.isFile){
                dirs.push({ title: file.name, key: file.path, isLeaf: false});
              }
            }
            node.addChildren(dirs);
        });
      }
    }
  }
}
