import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { MobilecastComponent } from './mobilecast/mobilecast.component';
import { MfpostComponent } from './mfpost/mfpost.component';

const routes: Routes = [
  { path: 'chat', component: ChatComponent },
  { path:'mobilecast',component:MobilecastComponent },
  { path:'mfpost',component:MfpostComponent} ,
  { path:'', redirectTo: 'cast1', pathMatch: 'full'},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
