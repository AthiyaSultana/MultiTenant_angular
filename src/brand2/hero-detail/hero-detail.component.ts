import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from 'hero';
import { HeroService }  from 'services/hero.service';
import { HeroDetailBaseComponent } from 'base-components/hero-detail/hero-detail.component';
import { fadeInAnimation } from 'animations/fade-in.animation';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.scss' ],
  animations: [fadeInAnimation]
})
export class HeroDetailComponent extends HeroDetailBaseComponent {    
}
