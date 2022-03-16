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
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child2Component } from './child2/child2.component';
import { Parent2Component } from './parent2/parent2.component';

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
    ChildComponent,
    ParentComponent,
    Child1Component,
    Parent1Component,
    Child2Component,
    Parent2Component,

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
