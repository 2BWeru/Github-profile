import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from '../app/component/content/content-component/content/content.component';
import { DisplayComponent } from '../app/component/display/display/display.component';
const routes: Routes = [ 
  { path: 'display', component: DisplayComponent},
  {path: 'content' , component: ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
