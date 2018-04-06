import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "services/in-memory-data.service";

import {DashboardBaseComponent} from "base-components/dashboard/dashboard.component";
import {HeroService} from "services/hero.service";
import {MessageService} from "services/message.service";
import {AppBaseComponent} from "base-components/app/app.component";
import {HeroesBaseComponent} from "base-components/heroes/heroes.component";
import {HeroDetailBaseComponent} from "base-components/hero-detail/hero-detail.component";
import {HeroSearchBaseComponent} from "base-components/hero-search/hero-search.component";
import {MessagesBaseComponent} from "base-components/messages/messages.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  declarations: [
    AppBaseComponent,
    DashboardBaseComponent,
    HeroesBaseComponent,
    HeroDetailBaseComponent,
    HeroSearchBaseComponent,
    MessagesBaseComponent
  ],
  providers: [HeroService, MessageService]
})
export class BaseModule {
}
