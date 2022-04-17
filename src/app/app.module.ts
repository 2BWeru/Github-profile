import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display-component/display/display.component';
import { ContentComponent } from './content-component/content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileDetailsService } from './service/profile-details.service';
import { FormComponent } from './form-component/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    ContentComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ProfileDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
