import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './profile-component/display/display.component';
import { ContentComponent } from './content-component/content/content.component';
import { NavComponent } from './navbar-component/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    ContentComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
