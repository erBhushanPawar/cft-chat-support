import { Component } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cft-chat-support';
  constructor(private _chatService: ChatService){}
  ngOnInit(){
    this._chatService.talk()
  }
}
