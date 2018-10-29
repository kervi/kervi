
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT

import { Component, OnInit } from '@angular/core';
import { NGXKerviService } from "ngx-kervi"
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  //providers: [ KerviService ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(fb: FormBuilder, private kerviService: NGXKerviService, private router: Router, private route: ActivatedRoute) {
    

  }

  ngOnInit() {
    

  }

  ngOnDestroy() {
    
  }
}


