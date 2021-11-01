import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {path:'listUsers',component:UsersListComponent},
  {path:'addUser',component:UsersFormComponent},
  {path:'',pathMatch:'full',redirectTo:'listUsers'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
