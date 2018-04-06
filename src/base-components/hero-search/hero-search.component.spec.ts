import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSearchBaseComponent } from './hero-search.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Hero } from 'hero';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { HEROES } from 'mock-heroes';
import { HeroService } from 'services/hero.service';

describe('HeroSearchBaseComponent', () => {
  let component: HeroSearchBaseComponent;
  let fixture: ComponentFixture<HeroSearchBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroSearchBaseComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: HeroService, useValue: { getHeroes: ()=> Observable.of(HEROES) } }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
