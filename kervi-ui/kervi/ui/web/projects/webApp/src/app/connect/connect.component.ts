import { Component, OnInit } from '@angular/core';
import { ConnectionState } from "ngx-kervi";
import { NGXKerviService } from "ngx-kervi";
@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  current = 1;

  constructor(private kerviService:NGXKerviService,) { 
    
    
  }

  ngOnInit() {
    var self = this;
    this.kerviService.connectionState$.subscribe(function(connectedState){
      console.log("connected service state",connectedState, self);
      if (connectedState == ConnectionState.disconnected){
        self.current=1
      }
      if (connectedState == ConnectionState.loading){
        self.current=2
      }
    });
  }

}
