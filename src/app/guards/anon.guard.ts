import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserserviceService } from '../services/userservice.service';
import { AuthUtils } from '../utility/auth-utils';
import { filter, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AnonGuard implements CanActivate {
  constructor(private uss: UserserviceService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {

    if (!AuthUtils.getAuthToken()) {
      console.log("anong if");
      return true;
    } else {
      console.log("anong else");
      const user$ = this.uss.fetchMe();
      return user$.pipe(map((data: any) => {
        if (!data.verified) {
          this.router.navigate(['welcome']);
        } else {
          console.log("anon else master min")
          this.router.navigate(['homepage']);
        }
      }))
    }
  }

}
