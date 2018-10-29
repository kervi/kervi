
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit } from '@angular/core';
import { KerviService } from "../kervi.service"
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  //providers: [ KerviService ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class ConnectComponent implements OnInit {
  loginForm: FormGroup;
  userName: AbstractControl;
  password: AbstractControl;
  constructor(fb: FormBuilder, private kerviService: KerviService, private router: Router, private route: ActivatedRoute) {
    var self = this;
    this.loginForm = fb.group({  
    'userName':  ['', Validators.required],
    'password':  ['', Validators.required]  
    });
    
    this.userName = this.loginForm.controls['userName'];
    this.password = this.loginForm.controls['password']; 

  }

  ngOnInit() {
    

  }

  ngOnDestroy() {
    //this.kerviService.Connected.unsubscribe()    
  }
}


