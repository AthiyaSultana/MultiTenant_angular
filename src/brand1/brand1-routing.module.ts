import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';

import {Routes as RoutesConfigured} from 'routes';
import {LoginComponent} from './login/login.component';
import {Brand1Component} from './brand1.component';

const routes: Routes = [
  {path: '', redirectTo: '/' + RoutesConfigured.Login, pathMatch: 'full'},
  {path: RoutesConfigured.Login, component: LoginComponent},
  {path: RoutesConfigured.BRAND1, component: Brand1Component},
  {path: RoutesConfigured.Dashboard, component: DashboardComponent},
  {path: RoutesConfigured.Detail + '/:id', component: HeroDetailComponent},
  {path: RoutesConfigured.Heroes, component: HeroesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class Brand1RoutingModule {
}
