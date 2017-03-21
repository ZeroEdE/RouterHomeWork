import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Injectable } from '@angular/core';

import {Observable } from 'rxjs/Rx';

@Injectable()
export class LoginRouteGuard implements CanActivate {
  constructor(private router: Router) { }

  // 判斷 登入 是否符合
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    // if(route.queryParams['api'] == '123')  {
    //   return Observable.of(true);
    // }else {
    //   this.router.navigateByUrl('/login');
    //   return Observable.of(false);
    // }

    return Observable.of(true);
  }


}
