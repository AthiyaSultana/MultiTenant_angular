import { Component, OnInit } from '@angular/core';
import { MessageService } from 'services/message.service';
import { MessagesBaseComponent } from 'base-components/messages/messages.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent extends MessagesBaseComponent {

}
