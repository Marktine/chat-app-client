import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Message } from '../models/message';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  private url = "http://localhost:3000";
  receivedMessages: Message[] = [];
  message: Message;
  Notifications: string[] = [];
  private socket
  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.message = Object.assign({
      message: '',
      username: 'unknown',
      createdDate: Date.now(),
    });
    this.chatService.getMessage().subscribe((message: Message) => {
      this.receivedMessages.push(message);
    });
    this.chatService.getDisconnectNotification().subscribe((noti: string) => {
      this.Notifications.push(noti);
    })
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message.message = '';
  }

}
