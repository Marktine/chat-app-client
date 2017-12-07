import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  private url = "http://localhost:3000";
  receivedMessages: string[] = [];
  message: string;
  private socket 
  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.getMessage().subscribe((message: string) => {
      this.receivedMessages.push(message);
    });
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

}
