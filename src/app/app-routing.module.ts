import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {InvestPageComponent} from "./pages/invest-page/invest-page.component";
import {ProperyDetailPageComponent} from "./pages/propery-detail-page/propery-detail-page.component";

const routes: Routes = [
  {
    path: 'invest',
    component: InvestPageComponent,
  },
  {
    path: 'detail/:id',
    component: ProperyDetailPageComponent
  },
  {
    path: '**',
    component: LandingPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
