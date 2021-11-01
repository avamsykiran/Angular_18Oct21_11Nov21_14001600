import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{

  users?:User[];
  errMsg?:string;

  constructor(private usersService:UsersService) {

  }

  ngOnInit(){
    this.usersService.getAll().subscribe(
      data => this.users=data,
      err => {console.log(err); this.errMsg="Unable to fetech data, inconvinience regretted";}
    );
  }
}
