import { Component } from '@angular/core';
import { Routes } from 'routes';

@Component({
  selector: 'app-component-base',
  template: ''
})
export class AppBaseComponent {
  readonly dashboardRoute = Routes.Dashboard;
  readonly heroesRoute = Routes.Heroes;
}
