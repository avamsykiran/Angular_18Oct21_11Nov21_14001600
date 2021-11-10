import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CommonGuardGuard implements CanActivate {

  constructor(private userService:UserService,private router:Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
    if(this.userService.currentUser!=null){
      if(this.userService.currentUser.role==='ADMIN')
        return this.router.parseUrl("/user");
      else
        return this.router.parseUrl("/txn");
    }
  
    return true;
  }
  
}
