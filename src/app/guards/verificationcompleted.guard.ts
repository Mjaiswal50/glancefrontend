import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { UserserviceService } from '../services/userservice.service';
import { AuthUtils } from '../utility/auth-utils';
@Injectable({
  providedIn: 'root'
})
export class VerificationcompletedGuard implements CanActivate {
  constructor(private uss: UserserviceService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    const user$ = this.uss.fetchMe();
    return user$.pipe(map((data: any) => {
      if (!!data.verified) {
        return true;
      } else {
        this.router.navigate(['welcome']);
        return false;
      }
    }
    ))
  }
}
