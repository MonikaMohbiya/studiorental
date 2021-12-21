import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Document1Component } from './document1/document1.component';

const routes: Routes = [
  { path:'document1',component:Document1Component},
  { path: '',redirectTo:'document1',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
