import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';

//
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RedElDirective } from './red-el.directive';
import { SqrtPipe } from './pipes/sqrt.pipe';
import { FooterComponent } from './footer/footer.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';

//

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    RedElDirective,
    SqrtPipe,
    FooterComponent,
    TemplateDrivenFormComponent,
    ModelDrivenFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule //
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
