import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';  
import { Document1Component } from './document1/document1.component';

@NgModule({
  declarations: [
    AppComponent,
    Document1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxDocViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
