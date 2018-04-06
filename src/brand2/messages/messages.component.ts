import { Component, OnInit } from '@angular/core';
import { MessageService } from 'services/message.service';
import { MessagesBaseComponent } from 'base-components/messages/messages.component';
import { slideUpAnimation } from 'animations/slide-up.animation';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  animations: [slideUpAnimation]
})
export class MessagesComponent extends MessagesBaseComponent {

}
