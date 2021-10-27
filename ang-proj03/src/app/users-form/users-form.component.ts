import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent {

  userForm: FormGroup;

  constructor(private usersService:UsersService,private router:Router) {
    this.userForm = new FormGroup({
      id: new FormControl('0',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      fullName: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(55)]),
      password: new FormControl('',[Validators.required]),
      role: new FormControl('USER',[Validators.required])
    });
  }

  get id():AbstractControl {
    return this.userForm.controls["id"];
  }

  get email():AbstractControl {
    return this.userForm.controls["email"];
  }

  get fullName():AbstractControl {
    return this.userForm.controls["fullName"];
  }

  get password():AbstractControl {
    return this.userForm.controls["password"];
  }

  formSubmitted(){
    this.usersService.add(this.userForm.value);
    this.router.navigateByUrl("/listUsers");
  }
}
