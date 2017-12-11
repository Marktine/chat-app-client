import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class SignupService {

  constructor(public fireAuth: AngularFireAuth) { }

  addUser(email, password) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

}
