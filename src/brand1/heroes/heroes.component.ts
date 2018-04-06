import { Component, OnInit } from '@angular/core';

import { Hero } from 'hero';
import { HeroService } from 'services/hero.service';
import { HeroesBaseComponent } from 'base-components/heroes/heroes.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent extends HeroesBaseComponent {
}
