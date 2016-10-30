import { Component, OnInit } from '@angular/core';
import { KerviService } from "../kervi.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  //providers: [ KerviService ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private kerviService:KerviService, private router:Router) {
      console.log("db c");
   }

  ngOnInit() {
    console.log("db nginit");
   
  }
}
