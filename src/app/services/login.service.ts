import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import { User } from '../models/user';

@Injectable()
export class LoginService {
  constructor(public fireAuth: AngularFireAuth) { }

  localLogin(username, password) {
    return this.fireAuth.auth.signInWithEmailAndPassword(username, password);
  }

  checkAuthentication() {
    this.fireAuth.authState.subscribe(auth => {
      if (auth) {
        return true;
      }
      else {
        return false;
      }
    });
  }

}
