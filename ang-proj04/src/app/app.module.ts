import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NumberSeriesComponent } from './number-series/number-series.component';
import { MsgBoxComponent } from './msg-box/msg-box.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberSeriesComponent,
    MsgBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
