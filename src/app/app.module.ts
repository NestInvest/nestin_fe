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
import {DataViewModule} from "primeng/dataview";
import {RatingModule} from "primeng/rating";
import {TagModule} from "primeng/tag";
import {FormsModule} from "@angular/forms";
import { CardComponent } from './widgets/card/card.component';
import {AnimateModule} from "primeng/animate";
import {CarouselModule} from "primeng/carousel";
import {ButtonModule} from "primeng/button";
import {AvatarModule} from "primeng/avatar";
import { InvestPageComponent } from './pages/invest-page/invest-page.component';
import { ProperyDetailPageComponent } from './pages/propery-detail-page/propery-detail-page.component';
import {DialogModule} from "primeng/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BadgeModule} from "primeng/badge";
import {NgOptimizedImage} from "@angular/common";
import {GalleriaModule} from "primeng/galleria";
import { ErrorComponent } from './widgets/error/error.component';
import {MessagesModule} from "primeng/messages";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    CardComponent,
    InvestPageComponent,
    ProperyDetailPageComponent,
    ErrorComponent
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
    AnimateModule,
    CarouselModule,
    ButtonModule,
    AvatarModule,
    DialogModule,
    BrowserAnimationsModule,
    BadgeModule,
    NgOptimizedImage,
    GalleriaModule,
    MessagesModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
