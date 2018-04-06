import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardBaseComponent } from './dashboard.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HeroService } from 'services/hero.service';
import { Hero } from 'hero';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { HEROES } from 'mock-heroes';

describe('DashboardComponent', () => {
  let component: DashboardBaseComponent;
  let fixture: ComponentFixture<DashboardBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardBaseComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: HeroService, useValue: { getHeroes: ()=> Observable.of(HEROES) } }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
