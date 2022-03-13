import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';

//
import { FormsModule } from '@angular/forms';
import { RedElDirective } from './red-el.directive';
//
@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    RedElDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
