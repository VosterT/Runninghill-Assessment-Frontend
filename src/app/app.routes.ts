import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordsComponent } from './words/words.component';

export const routes: Routes = [
    { path: '', component: WordsComponent },
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }