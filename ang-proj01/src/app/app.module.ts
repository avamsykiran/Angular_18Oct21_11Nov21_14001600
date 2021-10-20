import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SimpleInterestComponent } from './simple-interest/simple-interest.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SimpleInterestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
