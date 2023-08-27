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

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    HttpClientModule,
    CardModule,
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
