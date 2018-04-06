import { Component, OnInit } from '@angular/core';
import { Hero } from 'hero';
import { HeroService } from 'services/hero.service';
import { DashboardBaseComponent } from 'base-components/dashboard/dashboard.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent extends DashboardBaseComponent {
}
