import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SignupService } from '../services/signup.service';

import { User } from '../models/user';
import { ReturnStatus } from '../models/returnStatus';

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
  returnStatus: ReturnStatus = new ReturnStatus();

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
    this.returnStatus = this.signupService.addUser(this.userInfo);
  }

}
