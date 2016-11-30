// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit, OnDestroy } from '@angular/core';
import { KerviService } from "../../kervi.service"
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cam-board',
  templateUrl: './cam-board.component.html',
  styleUrls: ['./cam-board.component.css']
})
export class CamBoardComponent implements OnInit, OnDestroy {
  public dashboard: string;
  private routeSubscription;
  constructor(private kerviService: KerviService, private router: Router, private activatedRoute: ActivatedRoute) {
    console.log("cb c");
  }

  ngOnInit() {
    console.log("cb nginit");

    this.routeSubscription = this.activatedRoute.params.subscribe(params => {
      console.log("cb,rp", params);
      this.dashboard = params['name']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });
  }


  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

}
