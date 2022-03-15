import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./user/user.component";
import { Ex1Component } from "./ex1/ex1.component";
import { Ex2Component } from "./ex2/ex2.component";
import { CustomerDetailComponent } from "./customer-detail/customer-detail.component";
const routes: Routes = [
  {
    component: AboutComponent,
    path: 'about'
  },
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: UserComponent,
    path: 'user'
  },
  {
    component: Ex1Component,
    path: 'ex1'
  },
  {
    component: Ex2Component,
    path: 'ex2'
  },
  {
    component: CustomerDetailComponent,
    path: 'customer-detail'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
