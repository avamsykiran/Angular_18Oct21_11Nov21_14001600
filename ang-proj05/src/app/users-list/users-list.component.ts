import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users?: User[];
  errMsg?: string;

  constructor(private usersService: UsersService) {

  }

  loadData() {
    this.usersService.getAll().subscribe(
      data => this.users = data,
      err => { console.log(err); this.errMsg = "Unable to fetech data, inconvinience regretted"; }
    );
  }

  ngOnInit() {
    this.loadData();
  }

  remove(id: number) {
    if (confirm(`Are you sure of deleting user#${id} ?`)) {
      this.usersService.deleteById(id).subscribe(
        () => this.loadData(),
        err => { console.log(err); this.errMsg = "Unable to delete data, inconvinience regretted"; }
      );
    }
  }
}
