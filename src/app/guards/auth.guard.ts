import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthUtils } from '../utility/auth-utils';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    if (!!AuthUtils.getAuthToken()) {
      console.log("authif");
      return true;
    } else {
      console.log("authelse");
      this.router.navigate(['']);
    }
  }

}
