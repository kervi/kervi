import { Component, OnInit } from '@angular/core';
import { KerviWidgetComponent } from 'ngx-kervi'

@Component({
  selector: 'kervi-widget',
  templateUrl: "./widget.component.html",
  styles: []
})
export class WidgetComponent extends KerviWidgetComponent implements OnInit {
  constructor() {
    super();
   }

  ngOnInit() {
    this.ngOnInitWidget();
  }

}
