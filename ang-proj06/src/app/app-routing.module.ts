import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuardGuard } from './services/admin-guard.guard';
import { CommonGuardGuard } from './services/common-guard.guard';
import { UserGuardGuard } from './services/user-guard.guard';
import { LoginComponent } from './shared/login/login.component';
import { RegistrationComponent } from './shared/registration/registration.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [CommonGuardGuard] },
  { path: 'register', component: RegistrationComponent, canActivate: [CommonGuardGuard] },
  {
    path: 'user', 
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    canActivate: [AdminGuardGuard], 
    canActivateChild: [AdminGuardGuard], 
    canLoad: [AdminGuardGuard]
  },
  {
    path: 'txn', 
    loadChildren: () => import('./txn/txn.module').then(m => m.TxnModule),
    canActivate: [UserGuardGuard], 
    canActivateChild: [UserGuardGuard], 
    canLoad: [UserGuardGuard]
  },
  { path: '', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
