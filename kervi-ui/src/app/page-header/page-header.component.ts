import { Component, OnInit } from '@angular/core';
import { KerviService } from '../kervi.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css'],
  
})
export class PageHeaderComponent implements OnInit {
  public dashboards = null
  constructor(private kerviService:KerviService) {
    this.dashboards=this.kerviService.Application.dashboards;
    console.log("ph d",this.dashboards);
  }

  ngOnInit() {
  }

}
