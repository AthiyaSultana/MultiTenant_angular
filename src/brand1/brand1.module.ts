import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Brand1RoutingModule} from './brand1-routing.module';

import {Brand1Component} from './brand1.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroSearchComponent} from './hero-search/hero-search.component';
import {HeroService} from 'services/hero.service';
import {MessageService} from 'services/message.service';
import {MessagesComponent} from './messages/messages.component';
import {LoginComponent} from './login/login.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HeaderModule} from 'angular-component-library';
// import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
// import {InMemoryDataService} from '../services/in-memory-data.service';

@NgModule({
  imports: [

    BrowserModule,
    FormsModule,
    Brand1RoutingModule,
    HttpClientModule,
    HeaderModule

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, {dataEncapsulation: false}
    // )
  ],
  declarations: [
    Brand1Component,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    LoginComponent
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, HeroService, MessageService],
  bootstrap: [Brand1Component]
})
export class Brand1Module {
}
