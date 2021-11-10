import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { WidgetsModule } from '../widgets/widgets.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    FormsModule,
    WidgetsModule,
    RouterModule
  ],
  exports:[LoginComponent, RegistrationComponent]
})
export class SharedModule { }
