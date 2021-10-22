import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SimpleInterestComponent } from './simple-interest/simple-interest.component';
import { FriendsComponent } from './friends/friends.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { VerbalPipe } from './verbal.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SimpleInterestComponent,
    FriendsComponent,
    PipesDemoComponent,
    VerbalPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
