import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  messages :String[] = [];

  addMessage(message:String):void{
    this.messages.push(message);
  }

  clearMessages():void{
    this.messages = [];
  }
}
