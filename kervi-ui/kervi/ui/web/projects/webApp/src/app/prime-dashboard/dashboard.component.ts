import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { KerviDashboardComponent} from 'ngx-kervi'
import { MenuItem} from 'primeng/api';
declare var window:any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends KerviDashboardComponent implements OnInit {
  @ViewChild("leftPad") leftPad:ElementRef;
  @ViewChild("rightPad") rightPad:ElementRef;
  private items: MenuItem[];
  private padSize=180;
  public leftPadTop:number;
  public leftPadLeft:number;
  
  public rightPadTop:number;
  public rightPadLeft:number;
  constructor(private router:Router, private activatedRoute:ActivatedRoute) {
    super();
   }

  ngOnInit() {
    var self = this;
    //this.router.url;
    //console.log("r", this.activatedRoute.params.subscribe)
    this.activatedRoute.params.subscribe(params => {
      var dashboardId = params['name']; 
      this.loadDashboard(dashboardId);
      this.items = [];
        for(let board of this.dashboards){
          this.items.push({
            label: board.name,
            icon:'',
            routerLink: ['/dashboard', board.id]
          })
        }
      console.log("rid", dashboardId);
    });
  }
}
