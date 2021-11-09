import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MenuBarComponent, MessageBoxComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MenuBarComponent, MessageBoxComponent]
})
export class WidgetsModule { }
