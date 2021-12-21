import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerchantStudioRentalLandingpageComponent } from './merchant-studio-rental/merchant-studio-rental-landingpage/merchant-studio-rental-landingpage.component';
import { MerchantStudioRentalSignificanceComponent } from './merchant-studio-rental/merchant-studio-rental-significance/merchant-studio-rental-significance.component';
import { MerchantStudioRentalAboutUsComponent } from './merchant-studio-rental/merchant-studio-rental-about-us/merchant-studio-rental-about-us.component';
import { MerchantStudioRentalLoginpageComponent } from './merchant-studio-rental/merchant-studio-rental-loginpage/merchant-studio-rental-loginpage.component';
import { MerchantStudioRentalRegisterpageComponent } from './merchant-studio-rental/merchant-studio-rental-registerpage/merchant-studio-rental-registerpage.component';
import { MerchantStudioRentalDetailpageComponent } from './merchant-studio-rental/merchant-studio-rental-detailpage/merchant-studio-rental-detailpage.component';
import { MerchantStudioRentalDashboardComponent } from './merchant-studio-rental/merchant-studio-rental-dashboard/merchant-studio-rental-dashboard.component';
import { LogoutComponent } from "./merchant-studio-rental/logout/logout.component";

import { Studiopage12Component } from './studiopage12/studiopage12.component';
import { Studiopage18Component } from './studiopage18/studiopage18.component';

const routes: Routes = [
  {path: "significance", component: MerchantStudioRentalSignificanceComponent},
  {path: "aboutus", component: MerchantStudioRentalAboutUsComponent},
  {path: "login", component: MerchantStudioRentalLoginpageComponent},
  {path: "register", component: MerchantStudioRentalRegisterpageComponent},
  {path: "detail", component: MerchantStudioRentalDetailpageComponent},
  {path: "dashboard", component: MerchantStudioRentalDashboardComponent},
  {path: "logout", component: LogoutComponent},
  {path:"", component: MerchantStudioRentalLandingpageComponent, pathMatch: "full"},
  {path:"studiopage12",component:Studiopage12Component},
  {path:"studiopage18",component:Studiopage18Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
