import { Component, OnInit } from '@angular/core';
import { MessageService } from 'services/message.service';

@Component({
  selector: 'app-messages-base',
  template: ''
})
export class MessagesBaseComponent implements OnInit {

  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}
