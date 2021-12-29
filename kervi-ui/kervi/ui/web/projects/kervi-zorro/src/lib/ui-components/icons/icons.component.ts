// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, Input, ElementRef, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'kervi-icon',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})

export class IconsComponent implements OnInit {
  @Input()
  public icon: string = null;
  @Input()
  public inline = false;


  public iconType = "zorro"
  public inlineValue = ""
 
  constructor() {  
    
    // if (this.icon && this.icon.indexOf("mdi:") === 0){
    //   this.iconType ="mdi";
    //   this.icon = this.iconType.substring(4);
    // }
  }

  
  

  ngOnInit() {
    //console.log("x", this.icon, this.icon.indexOf("mdi:"));
    if (this.inline)
      {
        this.inlineValue = "display:inline"
      }
    if (this.icon && this.icon.indexOf("mdi:") === 0){
      this.iconType ="mdi";
      this.icon = this.icon.substring(4);
    }
    
  }
  
}