import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesBaseComponent } from './messages.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MessageService } from 'services/message.service';

describe('MessagesBaseComponent', () => {
  let component: MessagesBaseComponent;
  let fixture: ComponentFixture<MessagesBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesBaseComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        MessageService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
