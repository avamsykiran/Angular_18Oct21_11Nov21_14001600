import { Component } from '@angular/core';
import { User } from '../model/user';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  users:User[];

  constructor(private usersService:UsersService) {
    this.users= this.usersService.getAll();
  }


}
