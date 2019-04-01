import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlpComponentComponent } from './plp-component/plp-component.component';
import { PdpComponent } from './pdp/pdp.component';
import {CapitalizePipe} from './pipes/capitalise';
import { RatingComponent } from './rating/rating.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';


const appRoutes:Routes =[
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'pdp',
    component:PdpComponent
  },
  {
    path:'registration',
    component:RegistrationComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    PlpComponentComponent,
    PdpComponent,
    CapitalizePipe,
    RatingComponent,
    HomeComponent,
    DashboardComponent,
    RegistrationComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
