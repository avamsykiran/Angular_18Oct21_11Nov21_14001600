import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent {

  user: User;

  constructor(private usersService:UsersService,private router:Router) {
    this.user = {
      id: 0,
      email: '',
      fullName: '',
      password: '',
      role: 'USER'
    };
  }

  formSubmitted(){
    this.usersService.add(this.user);
    this.router.navigateByUrl("/listUsers");
  }
}
