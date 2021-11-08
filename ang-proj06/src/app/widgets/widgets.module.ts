import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MessageBoxComponent } from './message-box/message-box.component';



@NgModule({
  declarations: [MenuBarComponent, MessageBoxComponent],
  imports: [
    CommonModule
  ]
})
export class WidgetsModule { }
