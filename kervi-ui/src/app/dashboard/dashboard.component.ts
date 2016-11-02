import { Component, OnInit, OnDestroy } from '@angular/core';
import { KerviService } from "../kervi.service"
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  //providers: [ KerviService ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  public dashboard:string;
  private routeSubscription;
  
  constructor(private kerviService:KerviService, private router:Router, private activatedRoute:ActivatedRoute) {
      console.log("db c");
   }

  ngOnInit() {
    console.log("db nginit");
    this.routeSubscription = this.activatedRoute.params.subscribe(params => {
       console.log("cb,rp",params);
       this.dashboard = params['name']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });
   
  }

  ngOnDestroy(){
    this.routeSubscription.unsubscribe();
  }
}
