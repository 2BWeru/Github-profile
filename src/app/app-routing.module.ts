import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content-component/content/content.component';
import { DisplayComponent } from './display-component/display/display.component'
const routes: Routes = [ 
  { path: 'display', component: DisplayComponent},
  {path: 'content' , component: ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
