import { Component, OnInit } from '@angular/core';
import { Hero } from 'hero';
import { HeroService } from 'services/hero.service';
import { Routes } from 'routes';

@Component({
  selector: 'dashboard-base',
  template: ''
})
export class DashboardBaseComponent implements OnInit {
  heroes: Hero[] = [];
  readonly detailRoute = Routes.Detail;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
