import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SignupService } from '../services/signup.service';

import { User } from '../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userInfo: User = new User();
  error: string;

  username: string;
  password: string;
  emailAddress: string;
  phoneNumber: string;

  constructor(private signupService: SignupService, private router: Router) { }

  ngOnInit() {
  }

  addUser() {
    Object.assign(this.userInfo, {
      username: this.username,
      password: this.password,
      emailAddress: this.emailAddress,
      phoneNumber: this.phoneNumber,
    });
    console.log(this.userInfo);
    this.signupService.addUser(this.userInfo.emailAddress, this.userInfo.password).then(
      (success) => {
        console.log('success');
        this.router.navigateByUrl('/login');
      }
    ).catch((err) => {
      this.error = err;
    });
  }

}
