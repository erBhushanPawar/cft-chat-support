import { Injectable } from '@angular/core';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient'
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {


  token = environment.dialogFlow.accessToken;
  client = new ApiAiClient({ accessToken: this.token });

  constructor() { }

  talk() {
    return this.client.textRequest('hi')
      .then(res => {
        const speech = res.result.fulfillment.speech;
        console.log(speech);
      });
  }
}
