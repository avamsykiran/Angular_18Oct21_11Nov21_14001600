import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email?: string;
  password?: string;
  errMsg?:string;

  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void {
  }

  loginFormSubmitted() {
    if (this.email && this.password) {
      this.userService.login(this.email, this.password).subscribe(
        user => {
          if(user.role==='ADMIN')
            this.router.navigateByUrl("/user");
          else
            this.router.navigateByUrl("/txn");
        },
        err => {console.log(err);this.errMsg=err.message;}
      );
    }
  }
}
