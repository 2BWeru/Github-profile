import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display-component/display/display.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileDetailsService } from './service/profile-details.service';
import { FormComponent } from './form-component/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileSearchComponent } from './profile-search/profile-search.component';
import { SearchService } from './gitsearch-service/search.service';
import { ViewComponent } from './view-component/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    FormComponent,
    ProfileSearchComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [SearchService,ProfileDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
