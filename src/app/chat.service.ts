import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import { Message } from './models/message';


@Injectable()
export class ChatService {
  private url = 'http://localhost:3000';
  private socket;

  constructor() {
    this.socket = io(this.url);
   }

   sendMessage(message: Message) {
     if(message.message !== '' && message.message !== null)
      this.socket.emit('send-message', message);
   }

   public getMessage = () => {
     return Observable.create((observer) => {
       this.socket.on('send-message', (message) => {
         observer.next(message);
       });
     });
   }

   public getDisconnectNotification() {
     return Observable.create((observer) => {
       this.socket.on('user-disconnect', (notification) => {
        observer.next(notification);
       })
     })
   }

}
