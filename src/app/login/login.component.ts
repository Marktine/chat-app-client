import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
	@Output() passUserID: EventEmitter<string> = new EventEmitter<string>();
  error: string = '';
  email: string = '';
  password: string='';
	userID: string='';

  constructor(private loginService: LoginService , private router: Router) {
    if(loginService.checkAuthentication()) {
      console.log('Authentication success');
    }
    else {
      console.log('Authentication failed');
    }
   }

	sayHello() {
		console.log("Hello from Login Component");
	}

   localLogin() {
     this.loginService.localLogin(this.email, this.password).then(
       (success) => {
				 console.log(success.uid);
				 this.userID = success.uid;
				 this.passUserID.emit(this.userID);
				 this.router.navigateByUrl('/chat');
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
