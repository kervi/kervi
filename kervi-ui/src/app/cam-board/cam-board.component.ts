import { Component, OnInit } from '@angular/core';
import { KerviService } from "../kervi.service"
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cam-board',
  templateUrl: './cam-board.component.html',
  styleUrls: ['./cam-board.component.css']
})
export class CamBoardComponent implements OnInit {

  constructor(private kerviService:KerviService, private router:Router) {
      console.log("cb c");
   }

  ngOnInit() {
    console.log("cb nginit");
    

  }


  ngOnDestroy(){
    
  }

}
