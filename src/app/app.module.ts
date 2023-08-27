import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {HeaderComponent} from './widgets/header/header.component';
import {HttpClientModule} from "@angular/common/http";
import {ConfigService} from "./config/config.service";
import {CardModule} from "primeng/card";
import {ImageModule} from "primeng/image";
import { NCardComponent } from './widgets/n-card/n-card.component';
import {DataViewModule} from "primeng/dataview";
import {RatingModule} from "primeng/rating";
import {TagModule} from "primeng/tag";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    NCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    HttpClientModule,
    CardModule,
    ImageModule,
    DataViewModule,
    RatingModule,
    TagModule,
    FormsModule,
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
