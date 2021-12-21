import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Uni1page1Component } from './uni1page1/uni1page1.component';
import { Uni1page2Component } from './uni1page2/uni1page2.component';
import { Uni1page3Component } from './uni1page3/uni1page3.component';

@NgModule({
  declarations: [
    AppComponent,
    Uni1page1Component,
    Uni1page2Component,
    Uni1page3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
