import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {GoogleLoginProvider,FacebookLoginProvider} from 'angularx-social-login';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MerchantStudioRentalComponent } from './merchant-studio-rental/merchant-studio-rental.component';
import { MerchantStudioRentalLandingpageComponent } from './merchant-studio-rental/merchant-studio-rental-landingpage/merchant-studio-rental-landingpage.component';
import { MerchantStudioRentalSignificanceComponent } from './merchant-studio-rental/merchant-studio-rental-significance/merchant-studio-rental-significance.component';
import { MerchantStudioRentalAboutUsComponent } from './merchant-studio-rental/merchant-studio-rental-about-us/merchant-studio-rental-about-us.component';
import { MerchantStudioRentalLoginpageComponent } from './merchant-studio-rental/merchant-studio-rental-loginpage/merchant-studio-rental-loginpage.component';
import { MerchantStudioRentalRegisterpageComponent } from './merchant-studio-rental/merchant-studio-rental-registerpage/merchant-studio-rental-registerpage.component';
import { MerchantStudioRentalDetailpageComponent } from './merchant-studio-rental/merchant-studio-rental-detailpage/merchant-studio-rental-detailpage.component';
import { MerchantStudioRentalDashboardComponent } from './merchant-studio-rental/merchant-studio-rental-dashboard/merchant-studio-rental-dashboard.component';
import { LogoutComponent } from './merchant-studio-rental/logout/logout.component';
import { MerchantHeaderComponent } from './merchant-studio-rental/merchant-header/merchant-header.component';
import { Studiopage12Component } from './studiopage12/studiopage12.component';
import { Studiopage18Component } from './studiopage18/studiopage18.component';
import { DpDatePickerModule } from "ng2-date-picker";
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';
@NgModule({
  declarations: [
    AppComponent,
    MerchantStudioRentalComponent,
    MerchantStudioRentalLandingpageComponent,
    MerchantStudioRentalSignificanceComponent,
    MerchantStudioRentalAboutUsComponent,
    MerchantStudioRentalLoginpageComponent,
    MerchantStudioRentalRegisterpageComponent,
    MerchantStudioRentalDetailpageComponent,
    MerchantStudioRentalDashboardComponent,
    LogoutComponent,
    MerchantHeaderComponent,
    Studiopage12Component,
    Studiopage18Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule,
    DpDatePickerModule,
    
  ],

  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '629357222333-2i469olmmkv1ah8ur2l4ukbcj5j2ia57.apps.googleusercontent.com'
          )
          
        },
        
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('')
        },
      

      ]
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
