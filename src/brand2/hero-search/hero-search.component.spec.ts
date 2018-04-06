import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSearchComponent } from './hero-search.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Hero } from 'hero';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { HEROES } from 'mock-heroes';
import { HeroService } from 'services/hero.service';

describe('HeroSearchComponent (Brand 1)', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroSearchComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: HeroService, useValue: { getHeroes: ()=> Observable.of(HEROES) } }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
