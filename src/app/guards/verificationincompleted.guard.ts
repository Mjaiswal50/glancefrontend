import { UserserviceService } from './../services/userservice.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VerificationincompletedGuard implements CanActivate {
  constructor(private uss: UserserviceService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    const user$ = this.uss.fetchMe();
    return user$.pipe(map((data: any) => {
      if (!data.verified) {
        return true;
      } else {
        this.router.navigate(['homepage']);
        return false;
      }
    }))
  }

}
