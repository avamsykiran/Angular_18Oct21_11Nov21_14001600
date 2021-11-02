import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

  userForm: FormGroup;
  errMsg?: string;
  isEditing?: boolean;

  constructor(private usersService: UsersService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.userForm = new FormGroup({
      id: new FormControl(0, [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      fullName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(55)]),
      password: new FormControl('', [Validators.required]),
      role: new FormControl('USER', [Validators.required])
    });
  }

  ngOnInit() {
    let userId = this.activatedRoute.snapshot.params.uid;
    if (userId) {
      this.isEditing = true;
      this.usersService.getById(userId).subscribe(
        data => this.userForm.setValue(data),
        err => { console.log(err); this.errMsg = "Unable to load existing record. Please try again later."; }
      );
    }
  }

  get id(): AbstractControl {
    return this.userForm.controls["id"];
  }

  get email(): AbstractControl {
    return this.userForm.controls["email"];
  }

  get fullName(): AbstractControl {
    return this.userForm.controls["fullName"];
  }

  get password(): AbstractControl {
    return this.userForm.controls["password"];
  }

  formSubmitted() {

    let ob: Observable<User>;

    if (this.isEditing)
      ob = this.usersService.update(this.userForm.value);
    else
      ob = this.usersService.add(this.userForm.value);

    ob.subscribe(
      data => this.router.navigateByUrl("/listUsers"),
      err => { console.log(err); this.errMsg = "Unable to save data. Please try again later."; }
    );
  }
}
