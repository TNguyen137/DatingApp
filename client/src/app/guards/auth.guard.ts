import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _acctService: AccountService, private _toastr: ToastrService) {}
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  //   throw new Error('Method not implemented.');
  // }

  canActivate(): Observable<any> {
    return this._acctService.currentUser$.pipe(
      map(user => {
        if(user) {
          return true;
        }
        this._toastr.error('You Shall Not Pass!');
        return false;
      })
    );
  }
  
}
