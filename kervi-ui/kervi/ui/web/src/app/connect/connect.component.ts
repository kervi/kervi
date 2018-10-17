// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit } from '@angular/core';
import { KerviService } from "../kervi.service"
import { Router, ActivatedRoute } from '@angular/router';
import { ConnectedService} from '../connected.service'
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { TranslatePipe} from '../pipes/textPipe'

@Component({
  selector: 'app-connect',
  //providers: [ KerviService ],
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {
  private isConnected: Boolean = false;
  private currentPage = null;
  invalidUser:Boolean = false;
  private ts = new Date()
  loginForm: FormGroup;
  userName: AbstractControl;
  password: AbstractControl;
  isAuthenticated: boolean = false;
  doAuthenticate: boolean = false;
  inAuthentication: Boolean = false;
  
  constructor(fb: FormBuilder, private kerviService: KerviService, private connectedService:ConnectedService, private router: Router, private route: ActivatedRoute) {
    var self = this;
    this.loginForm = fb.group({  
    'userName':  ['', Validators.required],
    'password':  ['', Validators.required]  
    });
    
    this.userName = this.loginForm.controls['userName'];
    this.password = this.loginForm.controls['password']; 
    
  }

  
  private onConnectedChange(v) {

  }

  ngOnInit() {
    var self=this;
    this.isAuthenticated = this.connectedService.isAuthenticated;
    this.doAuthenticate = this.kerviService.doAuthenticate;
    this.inAuthentication = this.kerviService.inAuthentication$.value;
    this.kerviService.authenticationFailed$.subscribe(function(v){
      self.invalidUser = v;
    });

    this.kerviService.IPCReady$.subscribe(function(v){
      self.isConnected = v;
      self.isAuthenticated = self.connectedService.isAuthenticated;
      self.doAuthenticate = self.kerviService.doAuthenticate;
    });
    
    this.kerviService.inAuthentication$.subscribe(function(v){
      self.inAuthentication = v;
      //self.isAuthenticated = self.connectedService.isAuthenticated;
      //self.doAuthenticate = self.kerviService.doAuthenticate;
    
    });

  }

  ngOnDestroy() {
    //this.kerviService.Connected.unsubscribe()    
  }

  onSubmit(value: any): void {  
    this.kerviService.authenticate(value.userName, value.password)  
  }
}
