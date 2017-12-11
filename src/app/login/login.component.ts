import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
// import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  error: string = '';
  email: string = '';
  password: string='';

  constructor(private loginService: LoginService , private rourter: Router) {
    if(loginService.checkAuthentication()) {
      console.log('Authentication success');
    }
    else {
      console.log('Authentication failed');
    }
   }

   localLogin() {
     this.loginService.localLogin(this.email, this.password).then(
       (success) => {
         console.log('success!');
       }
     ).catch(
       (err) => {
         this.error = err;
       }
       );
   }

  ngOnInit() {
  }

}
