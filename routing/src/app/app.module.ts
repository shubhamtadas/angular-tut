import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { MyserviceService } from "./myservice.service";
import { HttpClientModule } from '@angular/common/http';
import { Ex1Component } from './ex1/ex1.component';
import { Ex2Component } from './ex2/ex2.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UserComponent,
    HomeComponent,
    Ex1Component,
    Ex2Component,
    CustomerDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
