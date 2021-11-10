import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-txn',
  templateUrl: './txn.component.html',
  styleUrls: ['./txn.component.css']
})
export class TxnComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  doLogout(){
    this.userService.logout();
    this.router.navigateByUrl("/");
  }
}
