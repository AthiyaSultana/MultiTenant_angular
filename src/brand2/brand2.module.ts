import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Brand2RoutingModule} from './brand2-routing.module';
import {LoginComponent2} from './login/login.component';
import {Brand2Component} from './brand2.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroSearchComponent} from './hero-search/hero-search.component';
import {HeroService} from 'services/hero.service';
import {MessageService} from 'services/message.service';
import {MessagesComponent} from './messages/messages.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderModule} from 'angular-component-library';

/*import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from 'services/in-memory-data.service';*/

@NgModule({
  imports: [

    BrowserModule,
    FormsModule,
    Brand2RoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HeaderModule

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, {dataEncapsulation: false}
    // )
  ],
  declarations: [
    Brand2Component,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    LoginComponent2
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, HeroService, MessageService],
  bootstrap: [Brand2Component]
})
export class Brand2Module {
}
