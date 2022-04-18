import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form-component/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchService } from './gitsearch-service/search.service';
import { ViewComponent } from './view-component/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
