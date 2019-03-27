import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { NGXKerviService } from 'ngx-kervi'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  userName: AbstractControl;
  password: AbstractControl;
  invalidCredentials:boolean = false;
  
  
  constructor(fb: FormBuilder, private kerviService:NGXKerviService) {
    var self = this;
    this.loginForm = fb.group({  
    'userName':  ['', Validators.required],
    'password':  ['', Validators.required]  
    });
    
    this.userName = this.loginForm.controls['userName'];
    this.password = this.loginForm.controls['password']; 
   }

   submitForm(): void {
     var self = this;
     if (this.loginForm.valid){
      console.log("fv");
      this.kerviService.authenticate(this.userName.value, this.password.value)
      .then(function(){
         console.log("login ok");
       }).catch(function(){
         console.log("login error");
         self.invalidCredentials=true;
       });
     } else {
       console.log("fve");
    //   // for (const i in this.loginForm.controls) {
    //   //   this.loginForm.controls[i].markAsDirty();
    //   //   this.loginForm.controls[i].updateValueAndValidity();
    //   // }
     }
    
  } 
  ngOnInit() {
  }
}
