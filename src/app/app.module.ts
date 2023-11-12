import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import {HttpClientModule} from '@angular/common/http';
import { BannerComponent } from './pages/banner/banner.component'

const routes:Routes=[
  {
    path:'',
    component:LandingpageComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'landing',
    component:LandingpageComponent
  },
  {
    path:'restaraunt-items',
    component:RestaurantComponent
  },
  {
    path:'create-order',
    component:CreateOrderComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:"**",
    component:LandingpageComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingpageComponent,
    RestaurantComponent,
    CreateOrderComponent,
    SignupComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
