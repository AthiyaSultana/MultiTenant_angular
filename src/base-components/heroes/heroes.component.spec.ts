import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesBaseComponent } from './heroes.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HeroService } from 'services/hero.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { HEROES } from 'mock-heroes';

describe('HeroesBaseComponent', () => {
  let component: HeroesBaseComponent;
  let fixture: ComponentFixture<HeroesBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesBaseComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: HeroService, useValue: { getHeroes: ()=> Observable.of(HEROES) } }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
