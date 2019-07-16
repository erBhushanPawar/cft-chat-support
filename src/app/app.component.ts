import { Component } from '@angular/core';
import { ChatService } from './chat.service';
import { PwaService } from './pwa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cft-chat-support';
  updateAvailable: boolean = false;
  constructor(private _chatService: ChatService,
              public pwaService: PwaService){}
  ngOnInit(){
    this._chatService.talk();
    this.pwaService.getUpdateAvailable().subscribe(state=>{
      this.updateAvailable = state;
    });
  }

  installApp(){
    if(this.pwaService.promptAvailable){
      this.pwaService.promptAvailable.prompt();
    }
  }
}
