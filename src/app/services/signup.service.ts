import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../models/user';
import { ReturnStatus } from '../models/returnStatus';

@Injectable()
export class SignupService {

  constructor(public fireAuth: AngularFireAuth, private db: AngularFireDatabase) { }

  addUser(user: User) {
    const returnStatus: ReturnStatus = new ReturnStatus();
    this.fireAuth.auth.createUserWithEmailAndPassword(user.emailAddress, user.password).then((success) => {
      this.db.database.ref('/users').push(Object.assign({
        userId: success.uid,
        phoneNumber: user.phoneNumber,
        userFullName: user.username,
      }));
      Object.assign(returnStatus, {
        isError: false,
        message: 'Successfully registered',
      });
    }).catch((err) => {
      Object.assign(returnStatus, {
        isError: true,
        message: err,
      });
    });
    return returnStatus;
  }
}
