import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Uni1page1Component } from './uni1page1/uni1page1.component';
import { Uni1page2Component } from './uni1page2/uni1page2.component';
import { Uni1page3Component } from './uni1page3/uni1page3.component';

const routes: Routes = [
  { path:'uni1page1',component:Uni1page1Component},
  { path:'uni1page2',component:Uni1page2Component},
  { path: 'uni1page3',component:Uni1page3Component},
  { path:'',redirectTo:'uni1page1',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
